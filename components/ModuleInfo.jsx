import { useState } from "react";
import { useEffect } from "react";
import styles from './moduleinfo.module.css'

export default function ModuleInfo({ moduleId }) {


    async function fetchData(){
        return await fetch(
            `https://forge-vtt.com/api/bazaar/package/${moduleId}`
          )
            .then((response) => response.json())
            .then((data) => data);
    }

    const [module, setModule] = useState({});

    useEffect(() => {
        fetchData().then(data => {
            if(data.success) setModule(data.package)});
    }, []);

    return (
        <div className={styles.infowrapper} style={module.installs ? {} : {display: "none"}}>
            <ModuleInfoButton name={'Version: ' + module.latest} color={'red'} />
            <ModuleInfoButton name={'Installs: ' + module.installs + '%'} color={'green'} />
            <ModuleInfoButton name={'FVTT: V10'} color={'orange'}/>
        </div>
    )
}

function ModuleInfoButton({ name, color}){
    return (
        <div className={styles.modulebutton} style={{backgroundColor: color || 'var(--nextra-primary-hue)' }}>
            {name}
        </div>
    )
}