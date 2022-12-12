import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from './moduleinfo.module.css'

let fetchedModuleData = null;
let forgeData = {};

export default function ModuleInfo() {

    const router = useRouter()
    const moduleId = router.pathname.split('/').pop()

    async function fetchData(){

      if(forgeData[moduleId]) return forgeData[moduleId];
      const data = await fetch(
            `https://forge-vtt.com/api/bazaar/package/${moduleId}`
          )
            .then((response) => response.json())
            .then((data) => data);
      forgeData[moduleId] = data;
      return data;
    }

    async function fetchPremium(){
      if(fetchedModuleData) return fetchedModuleData;
      console.log('Fetched data for ' + moduleId)
      const data = await fetch(
        `https://api.theripper93.com/moduleListing/latest`
      )
        .then((response) => response.json())
        .then((data) => data);
        fetchedModuleData = data;
        return data;
    }

    const [moduleData, setModuleData] = useState({ready: false});

    async function setData(){
        const modData = await fetchData();
        const premData = await fetchPremium() ?? {};
        const data = {ready: true, module: modData.success ? modData.package : null, premium: premData[moduleId]};
        return data;
    }

    useEffect(() => {
        setData().then(data => setModuleData(data));
    }, []);

    return (
      <div
        className={styles.infowrapper}
        style={moduleData.ready ? {} : { opacity: 0 }}
      >
        {moduleData.module ? (
          <>
            <ModuleInfoButton name={'Free'} color={'hsl(150deg 100% 40%)'} />
            <ModuleInfoButton
              name={'Version: ' + moduleData.module.latest}
            />
            <ModuleInfoButton
              name={'Installs: ' + moduleData.module.installs + '%'}
            />
            <ModuleInfoButton name={'FVTT: V10'} />
            <ModuleInfoButton name={'Download'} color={'hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity))'} link={`https://foundryvtt.com/packages/${moduleId}`} />
          </>
        ) : (
          <>
            <ModuleInfoButton name={'Premium'} color={'hsl(10deg 100% 50%)'} />
            <ModuleInfoButton
              name={'Version: ' + moduleData.premium?.version}
            />
            <ModuleInfoButton name={'FVTT: V10'} />
            <ModuleInfoButton name={'Download'} color={'hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity))'} link={moduleData.premium?.downloadURL} />
          </>
        )}
      </div>
    );
}

function ModuleInfoButton({ name, color, link }) {
  return (
    <a style={{ color: color }} className={styles.modulebutton} href={link} target='_blank'>
      {name}
    </a>
  );
}
