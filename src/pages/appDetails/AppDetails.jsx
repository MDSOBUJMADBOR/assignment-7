import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { HashLoader } from 'react-spinners';
import Img from '../../assets/call.png';
import Img2 from '../../assets/text.png';
import Img3 from '../../assets/video.png';
import { InstallAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {

const { id } = useParams();
// console.log(id,'id');
 const { apps, loading } = useApps();
//  console.log(loading,'sobuj');
 const expectedApp = apps.find((app) => String(app.id) === id);
// console.log(expectedApp,'expected');



const {installedApps , setInstalledApps} = useContext(InstallAppsContext);


const handleInstallApp = (type) => {
  const newItem = {
    ...expectedApp,
    type, // 👈 এটা add করো
    next_due_date: new Date().toDateString()
  };

  setInstalledApps([...installedApps, newItem]);

  // toast(`${type}  `);
  toast.success(`${type.toUpperCase()} sent to ${expectedApp.name} ✅`,{
  position: "top-center",
});
};
// console.log(installedApps,'ins');

if(loading){
return ( <div className='h-[60vh] flex justify-center items-center py-5'><HashLoader color="#ad46ff" /></div> )
}


 const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-500 text-white";
    if (status === "on-track") return "bg-green-500 text-white";
    if (status === "almost due") return "bg-yellow-400 text-black";
    return "";
  };





          return (
<div>

<div>

 <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid gird-cols-1  md:grid-cols-4 gap-6">




        {/* LEFT PROFILE CARD */}
        <div className="  md:col-span-1    text-center ">
   
        <div className='bg-white shadow-md rounded-2xl py-5 space-y-3'>
            <img
            src={expectedApp.picture}
            alt="profile"
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="text-lg font-semibold">{expectedApp.name}</h2>


          <span className=" px-3 py-1 rounded-full text-sm ">
          <p className={`inline-block px-3 py-1 rounded-full ${getStatusColor(expectedApp.status)}`}>
        {expectedApp.status}
      </p>
          </span>

       <br />  <br />
           
 <p> {

          expectedApp.tags.map((tag, ind) => (
            <span key={ind} className='bg-[#cbfadb]  rounded-full ml-2  font-semibold p-1 px-2'>
              {tag}
            </span>
          ))
}</p>
           
         

          <p className="text-gray-500 italic text-sm px-2">
            {expectedApp.bio}
          </p>
          <p className="text-xs text-gray-400">Preferred: {expectedApp.email}</p>

        </div>


          {/* Buttons */}
          <div className="space-y-3 pt-4 ">
            <button className="w-full  rounded-lg py-2 bg-white shadow-md">
             ⏰  Snooze 2 Weeks
            </button>
            <button className="w-full  rounded-lg py-2 bg-white shadow-md">
            📦  Archive
            </button>
            <button className="w-full text-red-500  rounded-lg py-2 bg-white shadow-md">
            🗑️  Delete
            </button>
          </div>



        </div>










        {/* RIGHT SIDE */}
        <div className=" md:col-span-3 space-y-6">

          {/* TOP STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h1 className="text-2xl font-bold"> {expectedApp.days_since_contact}</h1>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h1 className="text-2xl font-bold">{expectedApp.goal}</h1>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h1 className="text-xl font-bold">{expectedApp.next_due_date}</h1>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-500 text-sm">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="btn  px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="mb-4 font-semibold">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleInstallApp("call")} className= "btn bg-[#f3f4f6]  rounded-xl py-13 text-3xl  flex-col ">
              
                 <img src={Img} alt="" />
                 <p>Call</p>
               
              </button>

              <button onClick={() => handleInstallApp("text")} className="btn bg-[#f3f4f6]  rounded-xl py-13 text-3xl flex-col">
                <img src={Img2} alt="" />
               <p>Text</p>
              </button>

              <button onClick={() => handleInstallApp("video")} className="btn bg-[#f3f4f6]  rounded-xl py-13 text-3xl flex-col">
                <img src={Img3} alt="" />
                 <p>Video</p>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>



</div>



</div>

)

      
  
          
};

export default AppDetails;