import React, { useEffect, useState } from 'react';
import AppCard from '../ui/AppCard';
import { ClipLoader } from 'react-spinners';
import useApps from '../../hooks/useApps';
// import { useLoaderData } from 'react-router';

const TrendingApps = () => {

// const data = useLoaderData()
// console.log(data,'all data');

 const { apps, loading } = useApps();


          return (
                    <div className='max-w-[1600px] mx-auto bg-[#f8fafc]'>

<div className='max-w-[1110px] mx-auto'>
<h2 className='font-semibold text-3xl'>Your Friends</h2>


 

{loading ? (<div className='flex justify-center items-center py-5'> <ClipLoader color="#ad46ff" /> </div>) : (<div className='grid grid-cols-1  md:grid-cols-4 justify-center items-center gap-5 py-10 px-6'>
{
apps.map((app,ind) => {
          return <AppCard app={app} key={ind}></AppCard>
})
}
</div>)}



</div>


                    </div>
          );
};

export default TrendingApps;