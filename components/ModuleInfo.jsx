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
        setData().then(data => setModuleData(data));
    }, []);

    return (
        <div className={styles.infowrapper} style={moduleData.ready ? {} : {display: "none"}}>
            {
                moduleData.module ?
                (<>
                <ModuleInfoButton name={'Free'} color={'lime'} />
                <ModuleInfoButton name={'Version: ' + moduleData.module.latest} color={'red'} />
                <ModuleInfoButton name={'Installs: ' + moduleData.module.installs + '%'} color={'green'} />
                <ModuleInfoButton name={'FVTT: V10'} color={'orange'}/>
                </>)
                :
                (<>
                <ModuleInfoButton name={'Premium'} color={'red'}/>
                <ModuleInfoButton name={'Version: ' + moduleData.premium?.version} color={'red'} />
                <ModuleInfoButton name={'FVTT: V10'} color={'orange'}/>
                </>)
            }
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