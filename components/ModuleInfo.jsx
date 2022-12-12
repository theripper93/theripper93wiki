import { useState } from 'react';
import { useEffect } from 'react';
import styles from './moduleinfo.module.css';

export default function ModuleInfo({ moduleId }) {
  async function fetchData() {
    return await fetch(`https://forge-vtt.com/api/bazaar/package/${moduleId}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  const [module, setModule] = useState({});

  useEffect(() => {
    fetchData().then((data) => {
      if (data.success) setModule(data.package);
    });
  }, []);

  return (
    <div
      className={styles.infowrapper}
      style={module.installs ? {} : { display: 'none' }}
    >
      <ModuleInfoButton name={'Version: ' + module.latest} color={'#ef4444'} />
      <ModuleInfoButton
        name={'Installs: ' + module.installs + '%'}
        color={'#22c55e'}
      />
      <ModuleInfoButton name={'FVTT: V10'} color={'#f97316'} />
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
