import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from './moduleinfo.module.css'

export default function ModuleInfo() {

    const router = useRouter()
    const moduleId = router.pathname.split('/').pop()

    async function fetchData(){
        return await fetch(
            `https://forge-vtt.com/api/bazaar/package/${moduleId}`
          )
            .then((response) => response.json())
            .then((data) => data);
    }

    async function fetchPremium(){
        return await fetch(
            `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListingV10.json`
          )
            .then((response) => response.json())
            .then((data) => data);
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
        style={moduleData.ready ? {} : { opacity: 0}}
      >
        {moduleData.module ? (
          <>
            <ModuleInfoButton name={'Free'} color={'hsl(150deg 100% 27%)'} />
            <ModuleInfoButton
              name={'Version: ' + moduleData.module.latest}
              color={'hsl(37deg 100% 53%)'}
            />
            <ModuleInfoButton
              name={'Installs: ' + moduleData.module.installs + '%'}
              color={'hsl(235deg 100% 64%)'}
            />
            <ModuleInfoButton name={'FVTT: V10'} color={'var(--nextra-primary-hue)'} />
          </>
        ) : (
          <>
            <ModuleInfoButton name={'Premium'} color={'hsl(37deg 100% 53%)'} />
            <ModuleInfoButton
              name={'Version: ' + moduleData.premium?.version}
              color={'hsl(37deg 100% 53%)'}
            />
            <ModuleInfoButton name={'FVTT: V10'} color={'var(--nextra-primary-hue)'} />
          </>
        )}
      </div>
    );
}

function ModuleInfoButton({ name, color = 'var(--nextra-primary-hue)' }) {
  return (
    <div style={{ color: color }} className={styles.modulebutton}>
      {name}
    </div>
  );
}
