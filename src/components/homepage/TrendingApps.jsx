import React, { useEffect, useState } from 'react';
import AppCard from '../ui/AppCard';
// import { useLoaderData } from 'react-router';

const TrendingApps = () => {

// const data = useLoaderData()
// console.log(data,'all data');

const [apps,setApps] = useState([]);

useEffect(()=> {
const fetchData = async () => {
const res = await fetch('/data.json');
const data = await res.json();
console.log(data);
setApps(data);

};
fetchData();
},[]);


          return (
                    <div className='max-w-[1600px] mx-auto bg-[#f8fafc]'>

<div className='max-w-[1110px] mx-auto'>
<h2 className='font-semibold text-3xl'>Your Friends</h2>


 

<div className='grid grid-cols-4 justify-center items-center gap-5 py-10'>
{
apps.map((app,ind) => {
          return <AppCard app={app} key={ind}></AppCard>
})
}
</div>

</div>


                    </div>
          );
};

export default TrendingApps;