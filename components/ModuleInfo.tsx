import { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './moduleinfo.module.css';
import TextConverter from './TextConverter';

let fetchedModuleData = null;
let forgeData = {};

const repositoryOwner = 'theripper93';
const repositoryIndex = {
  "megapack": "megapack",
  "vtt-desktop-client": "fvtt-player-client",
  "levels": "Levels",
  "enhancedcombathud": "enhancedcombathud",
  "automated-evocations": "automated-evocations",
  "betterroofs": "Better-Roofs",
  "combat-tracker-dock": "combat-tracker-dock",
  "bossbar": "Boss-Bar",
  "combatbooster": "Combat-Booster",
  "fuzzy-foundry": "fuzzy-foundry",
  "hover-distance": "hover-distance",
  "hurry-up": "hurry-up",
  "levelsautocover": "levelsautocover",
  "levelsvolumetrictemplates": "levelsvolumetrictemplates",
  "patrol": "Patrol",
  "damage-numbers": "damage-numbers",
  "smarttarget": "smarttarget",
  "splatter": "splatter",
  "dnd-randomizer": "dnd-randomizer",
  "tile-sort": "tile-sort",
  "tile-scroll": "tile-scroll",
  "token-z": "token-z",
  "foundry-taskbar": "foundry-taskbar",
  "quickdraw": "quickdraw",
  "config-presets": "config-presets",
  "light-switch": "light-switch",
  "filepicker-plus": "filepicker-plus",
  "progress-tracker": "progress-tracker",
  "situational-shortcuts": "situational-shortcuts",
  "quick-doors": "quick-doors",
  "image-context": "image-context",
  "inactive-tokens-lmao": "inactive-tokens-lmao",
  "levels-3d-preview": "levels-3d-preview",
  "choices": "choices",
  "mmm": "Maxwell-s-Manual-of-Malicious-Maladies",
  "socketmacros": "socketmacros",
  "tokenflip": "tokenflip",
  "token-notes": "token-notes",
  "wall-height": "wall-height",
  "canvas3dcompendium": "canvas3dcompendium",
  "canvas3dtokencompendium": "canvas3dtokencompendium",
  "theripper-premium-hub": "theripper-premium-hub",
  "levels-layer-effects": "levels-layer-effects",
  "three-actor-portrait": "three-actor-portrait",
  "mastercrafted": "mastercrafted",
  "gatherer": "gatherer",
  "camera-dock": "camera-dock",
  "macro-wheel": "macro-wheel",

}

interface IModuleData {
  ready: boolean;
  module: {
    latest: string;
    installs: number;
    systems?: [string];
  };
  premium: boolean;
  releases: {
    [key: string]: string;
  },
  download?: string;
}

export default function ModuleInfo() {
  const placeholder = {
    ready: false,
  } as IModuleData;
  const router = useRouter();
  const moduleId = router.pathname.split('/').pop();

  async function fetchData() {
    if (forgeData[moduleId]) {
      setChangelogLoaded(true);
      return forgeData[moduleId];
    }
    const data = await fetch(
      `https://forge-vtt.com/api/bazaar/package/${moduleId}`
    )
      .then((response) => response.json())
      .then((data) => data);
    
    const isPremium = data.package?.premium == "protected";
    
    getAllReleasesFromGitHub(repositoryOwner, repositoryIndex[moduleId] ?? moduleId, isPremium).then((releases) => {
      forgeData[moduleId].releases = releases ?? {};
      setChangelogLoaded(true);
      setData().then((data) => setModuleData(data));
    });
    forgeData[moduleId] = data;
    return data;
  }

  async function fetchPremium() {
    if (fetchedModuleData) return fetchedModuleData;
    const data = await fetch(`https://api.theripper93.com/moduleListing/latest`)
      .then((response) => response.json())
      .then((data) => data);
    fetchedModuleData = data;
    return data;
  }

  const [moduleData, setModuleData] = useState<IModuleData>(placeholder);

  const [showChangelog, setShowChangelog] = useState(false);

  const [changelogLoaded, setChangelogLoaded] = useState(false);

  async function setData(): Promise<IModuleData> {
    const modData = await fetchData();
    const data: IModuleData = {
      ready: true,
      module: modData.success ? modData.package : null,
      premium: modData.package?.premium == "protected",
      releases: modData.releases ?? {},
    };
    if (moduleId == "vtt-desktop-client") {
      const specialData: IModuleData = {
        ready: true,
        module: {
          latest: Object.keys(modData.releases ?? {})[0],
          installs: 0,
        },
        premium: false,
        releases: modData.releases,
        download: "https://github.com/theripper93/fvtt-player-client/releases/latest"
      };
      return specialData;
    }
    return data;
  }

  useLayoutEffect(() => {
    setData().then((data) => setModuleData(data));
  }, []);

  return (
    <div>
    <div className={styles.info} style={moduleData.ready ? {} : { opacity: 0 }}>
        <>
          {moduleData.premium ? <ModuleInfoButton name={'Premium'} color={'hsl(10deg 100% 50%)'} /> : <ModuleInfoButton name={'Free'} color={'hsl(150deg 100% 40%)'} />}
          <ModuleInfoButton name={'Version: ' + (moduleData.module?.latest ?? "V11")} />
          {(moduleData.module?.installs ?? 0) >= 1 && <ModuleInfoButton
            name={'Installs: ' + ((moduleData.module?.installs ?? 0 >= 1 ? moduleData.module?.installs : undefined) ?? "?") + '%'}
          />}
          <ModuleInfoButton name={'FVTT: V11'} />
          <ModuleInfoButton name={moduleData.module?.systems?.length ? moduleData.module.systems.join(", ") : "Any System"} color='#009688' />
          <ModuleInfoButton
            name={'Download'}
            color={
              'hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity))'
            }
            link={moduleData.download ?? `https://foundryvtt.com/packages/${moduleId}`}
            />
            {<ModuleInfoButton name={'Changelog'} color='#7db8f4' onClick={() => { setShowChangelog(!showChangelog) }} />}
        </>
      </div>
      <ol style={showChangelog && Object.keys(moduleData?.releases ?? {}).length ? {margin: "1rem 0px",padding: "0.5rem",borderRadius: "5px",backgroundColor: "#80808026"} : {display: "none"}}>
          {moduleData.releases && Object.keys(moduleData.releases).filter(r => moduleData.releases[r]).map((release) => (
            <li key={release} style={{borderBottom: "1px solid #8080802e"}}>
              <h1 style={{fontSize: "x-large", fontWeight: 700}} >{release}</h1>
              <ol style={{listStyle: "disc", margin: "0.5rem 1rem", lineBreak: "anywhere"}}>{
                moduleData.releases[release].split(/- |##|\* /).filter(l => l).map((line, i) => {
                  const isTitle = line.includes("What's Changed") || line.includes("What's New") || line.includes("New Contributors");
                  return <li key={i} style={{listStyle: isTitle ? "none" : "disc", margin: isTitle ? "0 -1rem" : ""}} ><TextConverter text={line}></TextConverter></li> // <li key={i}>{line}</li>
                })
              }</ol>
            </li>
          ))}
      </ol>
    </div>
  );
}



function ModuleInfoButton({
  name,
  color,
  link,
  onClick,
}: {
  name?: string;
  color?: string;
    link?: string;
    onClick?: () => void;
}) {

  return (
    <>
      {link ? (
        <a
          style={color ? { color: color } : {}}
          className={styles.button}
          href={link}
          target='_blank'
        >
          {name}
        </a>
      ) : (
        <div onClick={onClick} style={color ? { color: color, cursor: onClick ? "pointer" : "default" } : {cursor: onClick ? "pointer" : "default"}} className={styles.button}>
          {name}
        </div>
      )}
    </>
  );
}

async function getAllReleasesFromGitHub(owner, repo, isPremium) {
  if (isPremium) {
    const changelogURL = `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/premium-changelogs/${repo}.md`
    try {
      const response = await fetch(changelogURL);
      if(!response.ok) return { "Error": "Changelog for this module is not available yet." };
      const changelog = await response.text();
      if(!changelog) return { "Error": "Changelog for this module is not available yet." };
      const releases = {};
      //parse changelog
      const changelogLines = changelog.split(/\r?\n/);
      let currentVersion = "";
      for(const line of changelogLines) {
        if (line.startsWith("##")) {
          const version = line.replace("## Version ", "");
          releases[version] = "";
          currentVersion = version;
        } else {
          const trimmed = line.trim();
          if(trimmed != "") releases[currentVersion] += line + "\n";
        }
      }
      return releases;
    } catch (error) {
      return null;
    }
  } else {    
    const releasesPerPage = 100; // Maximum allowed by GitHub API
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${releasesPerPage}`;
  
    try {
      let compiledReleases = {};
  
      let currentPage = 1;
      let hasMorePages = true;
  
      while (hasMorePages) {
        const response = await fetch(`${apiUrl}&page=${currentPage}`);
        const releases = await response.json();
  
        if (releases.length === 0) {
          // No more releases, break the loop
          hasMorePages = false;
        } else {
          releases.forEach((release) => {
            compiledReleases[release.tag_name] = release.body;
          });
          currentPage++;
        }
      }
  
      return compiledReleases;
    } catch (error) {
      return null;
    }
  }
}