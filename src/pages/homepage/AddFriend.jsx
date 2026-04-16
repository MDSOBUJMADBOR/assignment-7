import React from 'react';

const AddFriend = () => {
          return (
                    <div className='max-w-[1600px] mx-auto bg-[#f8fafc] py-14'>

<div className='text-center max-w-[1110px] mx-auto space-y-6 '>
          <h2 className='text-4xl font-bold '>Friends to keep close in your life</h2>
          <p className='text-gray-400 px-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
          relationships that matter most.</p>
          <button className='btn bg-green-800 text-white'> + Add a Friend</button>


          <div className='grid grid-cols-1 md:grid-cols-4 items-center gap-4 px-6'>
                    <div className='bg-white p-9 rounded border-2 border-gray-200'>
                              <h2 className='text-3xl font-bold'>10</h2>
                              <p className='text-[18px] text-gray-400'>Total Friends</p>
                    </div>
                    <div className='bg-white p-9 rounded border-2 border-gray-200'>
                              <h2 className='text-3xl font-bold'>3</h2>
                              <p className='text-gray-400 text-[18px]'>On Track</p>
                    </div>
                    <div className='bg-white p-9 rounded border-2 border-gray-200'>
                              <h2 className='text-3xl font-bold'>6</h2>
                              <p className='text-gray-400 text-[18px]'>Need Attention</p>
                    </div>
                    <div className='bg-white p-9 rounded border-2 border-gray-200'>
                              <h2 className='text-3xl font-bold'>12</h2>
                              <p className='text-gray-400 text-[18px]'>Interactions This Month</p>
                    </div>
                    
                   
          </div>
<hr className='text-gray-300'></hr>

</div>



                    </div>
          );
};

export default AddFriend;