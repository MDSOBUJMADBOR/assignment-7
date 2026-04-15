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
  <Link to={`/${app.id}`} className='shadow-md bg-white p-3 rounded-lg flex justify-center items-center'>
     <div className='text-center'>
           <img src={app.picture} alt="" className='rounded-full p-2 max-w-[250px] mx-auto w-[80px] h-[80px]' />

      <h2 className='font-semibold text-2xl mt-2 '>{app.name}</h2>

      <p className='text-gray-500'>
        {app.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 my-2'>
        {
          app.tags.map((tag, ind) => (
            <span key={ind} className='bg-gray-200 px-2 py-1 rounded flex justify-center items-center'>
              {tag}
            </span> 
          ))
        }
      </div>

      {/* Status */}
      <p className={`inline-block px-3 py-1 rounded ${getStatusColor(app.status)}`}>
        {app.status}
      </p>
     </div>

    </Link>
  );
};

export default AppCard;