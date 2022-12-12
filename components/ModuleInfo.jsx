import { useState } from 'react';
import { useEffect } from 'react';
import styles from './moduleinfo.module.css';

export default function ModuleInfo({ moduleId }) {
  async function fetchData() {
    return await fetch(`https://forge-vtt.com/api/bazaar/package/${moduleId}`)
      .then((response) => response.json())
      .then((data) => data);
  }

    async function fetchPremium(){
        return await fetch(
            `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListingV10.json`, { cache: "no-cache" }
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
        fetchData().then(data => {
            if(data.success) setModule(data.package)});
    }, []);

    return (
      <div
        className={styles.infowrapper}
        style={module.installs ? {} : { display: 'none' }}
      >
        <ModuleInfoButton
          name={'Version: ' + module.latest}
          color={'#ef4444'}
        />
        <ModuleInfoButton
          name={'Installs: ' + module.installs + '%'}
          color={'#22c55e'}
        />
        <ModuleInfoButton name={'FVTT: V10'} color={'#f97316'} />{' '}
      </div>
    );
}

function ModuleInfoButton({ name, color = 'var(--nextra-primary-hue)' }) {
  return (
    <div
      style={{ color: color}}
      className={styles.modulebutton}
    >
      {name}
    </div>
  );
}
