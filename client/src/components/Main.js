// import React, { useRef } from 'react'
// import {Link} from 'react-router-dom'
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  const inputRef = useRef(null);
  return (
    <div className='mx-auto p-8 bg-gray-800 rounded-lg max-w-lg'>
      <h1 className='text-3xl font-bold text-center mb-6 text-white border-4 border-primary p-2 rounded-md'>
        Quiz Instructions
      </h1>
      <ol className='list-decimal list-inside space-y-4 text-center'>
        <li className='text-xl text-gray-100'>
          You will be asked 10 questions one after another.
        </li>
        <li className='text-xl text-gray-100'>
          10 points are awarded for the correct answer.
        </li>
        <li className='text-xl text-gray-100'>
          Each question has three options. You can choose only one option.
        </li>
        <li className='text-xl text-gray-100'>
          You can review and change answers before the quiz finishes.
        </li>
        <li className='text-xl text-gray-100'>
          The result will be declared at the end of the quiz.
        </li>
      </ol>
      <form id='form' className='flex justify-center mt-16'>
        <input
          ref={inputRef}
          type='text'
          className=' px-4 py-2 w-1/2 border border-gray-100 rounded-md text-base'
          placeholder='Enter your name'
        />
      </form>
      <div className=' flex justify-center pt-8'>
        <Link
          to={'quiz'}
          className=' bg-yellow-400 text-white py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors'
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

// export const Main = () => {
//   const inputRef = useRef(null);
//   return (
//       <div className='container mx-auto p-4'>
//           <h1 className='text-3xl font-bold text-center mb-6'>Quiz Instructions</h1>
//           <ol className='list-decimal list-inside space-y-2'>
//             <li className='text-xl text-black-400'>You will be asked 10 questions one after another.</li>
//             <li className='text-xl text-black-400'>10 points is awarded for the correct answer.</li>
//             <li className='text-xl text-black-400'>Each question has three options. You can choose only one options.</li>
//             <li className='text-xl text-black-400'>You can review and change answers before the quiz finish.</li>
//             <li className='text-xl text-black-400'>The result will be declared at the end of the quiz.</li>
//           </ol>
//           <form className='flex justify-center mt-16'>
//               <input ref={inputRef} type='text' className='px-4 py-2 w-1/2 border border-black-300 rounded-md text-base'></input>
//           </form>
//           <div>
//               <Link to={'quiz'}  className='btn bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors'
//         >Start Quiz</Link>
//           </div>
//     </div>
//   )
// }
