import React, { useContext, useState } from 'react';
import { InstallAppsContext } from '../../context/InstalledAppsContext';

import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';


const Timeline = () => {
  const { installedApps } = useContext(InstallAppsContext);

  const getIcon = (type) => {
    if (type === "call") return callImg;
    if (type === "text") return textImg;
    if (type === "video") return videoImg;
    return callImg;
  };
const [filterType, setFilterType] = useState("all");

const filteredApps =
  filterType === "all"
    ? installedApps
    : installedApps.filter(app => app.type === filterType);





return (
  <div className="p-6 bg-gray-100 ">

  <div className='space-y-4 max-w-7xl mx-auto'>

<h2 className='font-bold text-3xl mt-7'>Timeline </h2>

{
  installedApps.length >= 1 ? ( <div > 
 <div className="flex-none  ">
    <ul className="menu menu-horizontal rounded-md bg-white">
      
      <li className='w-[200px] hover:bg-white'>
        <details>
          <summary className='text-[18px] font-semibold'>Filter timeline</summary>
          <ul className="bg-base-100 rounded-t-none p-2 w-[200px] font-semibold">
            <li><a onClick={() => setFilterType("all")}>All</a></li>
            <li><a onClick={() => setFilterType("call")}>Call</a></li>
             <li><a onClick={() => setFilterType("text")}>Text</a></li>
            <li><a onClick={() => setFilterType("video")}>Video</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
       
    
     </div> ) : ( <div></div>)
}

    {installedApps.length === 0 ? (



     <div className="flex flex-col items-center justify-center h-[40vh] text-center bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">

  {/* ICON */}
  <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-4">
    <span className="text-4xl">📭</span>
  </div>

  {/* TITLE */}
  <h2 className="text-2xl font-semibold text-gray-700 mb-2">
    No Data Found
  </h2>

  {/* SUBTEXT */}
  <p className="text-gray-400 mb-4">
    You don’t have any activity yet. Start interacting to see timeline updates.
  </p>

 

</div>




    ) : (


     
     filteredApps.map((app, ind) => (
       <div
         key={ind}
         className="flex items-center gap-4 bg-white shadow rounded-xl p-4 hover:shadow-md transition"
       >
         {/* ICON */}
         <img
           src={getIcon(app.type)}
           alt="icon"
           className="w-10 h-10"
         />

         {/* TEXT */}
         <div>
           <h2 className="font-semibold text-gray-800">
             {app.type === "call" && "Call"}
             {app.type === "text" && "Text"}
             {app.type === "video" && "Video"}{" "}
             <span className="text-gray-500 font-normal">
               with {app.name}
             </span>
           </h2>

           <p className="text-sm text-gray-400">
             {app.next_due_date}
           </p>
         </div>
       </div>
     ))




    )}


</div>

  </div>
);


};

export default Timeline;