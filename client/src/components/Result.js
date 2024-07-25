// import React from 'react'
// import { Link } from 'react-router-dom'
// import { ResultTable } from './ResultTable';

// export const Result = () => {
//   function onRestart() {
//     console.log('Restart');
//   }

//   return (
//     <div className='mx-auto bg-gray-800 p-12 rounded-lg max-w-2xl'>
//       <h1 className='text-white font-bold text-3xl text-center mb-8'>Result</h1>
//       <div className='flex flex-col items-center gap-4 border-2 p-6'>
//         <div className='flex justify-between w-full text-lg text-gray-400'>
//           <span>UserName:</span>
//           <span className='text-'>Explo65</span>
//         </div>
//         <div className='flex justify-between w-full text-lg text-gray-400'>
//           <span>Total Questions:</span>
//           <span className='text-'>15</span>
//         </div>
//         <div className='flex justify-between w-full text-lg text-gray-400'>
//           <span>Total Attempts:</span>
//           <span className='text-'>03</span>
//         </div>
//         <div className='flex justify-between w-full text-lg text-gray-400'>
//           <span>Total Points Scored:</span>
//           <span className='text-'>70</span>
//         </div>
//         <div className='flex justify-between w-full text-lg text-gray-400'>
//           <span>Quiz Result:</span>
//           <span className='text-'>Passed</span>
//         </div>
//       </div>
      // <div className='flex justify-center mt-8'>
      //   <Link 
      //     to={'/'}
      //     onClick={onRestart}
      //     className='bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors'
      //   >
      //     Restart
      //   </Link>
      // </div>
//       <div className='container p-8'>
//         <ResultTable></ResultTable>
//       </div>
//     </div>
    
//   )
// }
import React from 'react';
import { useUser } from './database/store';
import { ResultTable } from './ResultTable';
import { Link } from 'react-router-dom'

export const Result = () => {
  const { userData } = useUser();

  return (
    <div className='mx-auto p-8 bg-gray-800 max-w-lg'>
      <h1 className='text-3xl text-center font-bold border-4 text-white rounded-lg'>Result</h1>
      <ResultTable userData={userData} />
      <div className='flex justify-center mt-8'>
        <Link 
          to={'/'}
        
          className='bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors'
        >
          Restart
        </Link>
      </div>
    </div>
  );
};
