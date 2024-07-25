// import React from 'react';

// export const ResultTable = () => {
//   return (
//     <div className='overflow-x-auto'>
//       <table className='w-full'>
//         <thead className='bg-gray-900 text-gray-300 text-center'>
//           <tr>
//             <td className='border-2 p-4'>User</td>
//             <td className='border-2 p-4'>Attempts</td>
//             <td className='border-2 p-4'>Points Scored</td>
//             <td className='border-2 p-4'>Quiz Status</td>
//           </tr>
//         </thead>
//         <tbody className='bg-gray-300 text-center'>
//           <tr>
//             <td className='border-2  p-4'>Explo65</td>
//             <td className='border-2  p-4'>03</td>
//             <td className='border-2  p-4'>70</td>
//             <td className='border-2  p-4'>Passed</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
import React from 'react';

export const ResultTable = ({ userData }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-gray-900 text-gray-300 text-center'>
          <tr>
            <td className='border-2 p-4'>User</td>
            <td className='border-2 p-4'>Attempts</td>
            <td className='border-2 p-4'>Points Scored</td>
            <td className='border-2 p-4'>Quiz Status</td>
          </tr>
        </thead>
        <tbody className='bg-gray-300 text-center'>
          <tr>
            <td className='border-2 p-4'>{userData.username || 'N/A'}</td>
            <td className='border-2 p-4'>{userData.attempts || 'N/A'}</td>
            <td className='border-2 p-4'>{userData.score || 'N/A'}</td>
            <td className='border-2 p-4'>{userData.status || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
