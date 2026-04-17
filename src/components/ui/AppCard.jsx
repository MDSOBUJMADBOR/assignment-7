import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-500 text-white";
    if (status === "on-track") return "bg-green-500 text-white";
    if (status === "almost due") return "bg-yellow-400 text-black";
    return "";
  };

  return (
  <Link to={`/${app.id}`} className='  shadow-md bg-white  rounded-lg flex justify-center items-center transition duration-500 hover:scale-108 '>
     <div className='text-center space-y-4 py-6'>
           <img src={app.picture} alt="" className='rounded-full  mx-auto w-[80px] h-[80px]' />

      <h2 className='font-semibold text-2xl  '>{app.name}</h2>

      <p className='text-gray-500'>
        {app.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 '>
        {
          app.tags.map((tag, ind) => (
            <span key={ind} className='bg-[#cbfadb]  rounded-full flex justify-center items-center font-semibold p-1 px-2'>
              {tag}
            </span> 
          ))
        }
      </div>

      {/* Status */}
      <p className={`inline-block p-1 px-2  rounded-full ${getStatusColor(app.status)}`}>
        {app.status}
      </p>
     </div>

    </Link>
  );
};

export default AppCard;