import { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './moduleinfo.module.css';
import spinner from '../public/static/images/loading.svg';

let fetchedModuleData = null;
let forgeData = {};

interface IModuleData {
  ready: boolean;
  module: {
    latest: string;
    installs: number;
  };
  premium: {
    version: number;
    downloadURL: string;
  };
}

export default function ModuleInfo() {
  const placeholder = {
    ready: false,
  } as IModuleData;
  const router = useRouter();
  const moduleId = router.pathname.split('/').pop();

  async function fetchData() {
    if (forgeData[moduleId]) return forgeData[moduleId];
    const data = await fetch(
      `https://forge-vtt.com/api/bazaar/package/${moduleId}`
    )
      .then((response) => response.json())
      .then((data) => data);
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

  async function setData(): Promise<IModuleData> {
    const modData = await fetchData();
    const premData = (await fetchPremium()) ?? {};
    const data: IModuleData = {
      ready: true,
      module: modData.success ? modData.package : null,
      premium: premData[moduleId],
    };
    return data;
  }

  useLayoutEffect(() => {
    setData().then((data) => setModuleData(data));
  }, []);

  return (
    <div className={styles.info} style={moduleData.ready ? {} : { opacity: 0 }}>
      {moduleData.module ? (
        <>
          <ModuleInfoButton name={'Free'} color={'hsl(150deg 100% 40%)'} />
          <ModuleInfoButton name={'Version: ' + moduleData.module.latest} />
          <ModuleInfoButton
            name={'Installs: ' + moduleData.module.installs + '%'}
          />
          <ModuleInfoButton name={'FVTT: V11'} />
          <ModuleInfoButton
            name={'Download'}
            color={
              'hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity))'
            }
            link={`https://foundryvtt.com/packages/${moduleId}`}
          />
        </>
      ) : (
        <>
          <ModuleInfoButton name={'Premium'} color={'hsl(10deg 100% 50%)'} />
          <ModuleInfoButton name={'Version: ' + moduleData.premium?.version} />
          <ModuleInfoButton name={'FVTT: V11'} />
          <ModuleInfoButton
            name={'Download'}
            color={
              'hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity))'
            }
            link={moduleData.premium?.downloadURL}
          />
        </>
      )}
    </div>
  );
}

function ModuleInfoButton({
  name,
  color,
  link,
}: {
  name?: string;
  color?: string;
  link?: string;
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
        <div style={color ? { color: color } : {}} className={styles.button}>
          {name}
        </div>
      )}
    </>
  );
}
