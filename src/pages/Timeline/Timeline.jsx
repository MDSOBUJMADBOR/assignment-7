import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstalledAppsContext';


const Timeline = () => {

const {installedApps } = useContext(InstallAppsContext);

console.log(installedApps ,'data');

          return (
                    <div> 

{
installedApps.map((app,ind) => {
          return <div key={ind}>
          <img src={app.picture} alt="" />
          <p>{app.name}</p>
          </div>
})
}

                    </div>
          );
};

export default Timeline;