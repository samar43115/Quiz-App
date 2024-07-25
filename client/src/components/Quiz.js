// import React, { useState } from 'react'
// import { Question } from './Question'
// import data from './database/Data';

// export const Quiz = () => {
//   const [currInd, setInd] = useState(1);
//   function onNext() {
//     if (currInd < data.length - 1) {
//       setInd(currInd + 1);
//     }
    
//   }
//   function onPrev() {
//     if (currInd > 0) {
//       setInd(currInd - 1);
//     }
//   }
//   return (
//     <div className='mx-auto p-8 bg-gray-800 max-w-lg'>
//       <h1 className='text-3xl text-center font-bold border-4 text-white rounded-lg'>Quiz</h1>
//       <div className='flex justify-center mt-20'>
//         <Question question={data[currInd]} />

//       </div>
//       <div className='grid grid-cols-2 gap-4 justify-items-center mt-32'>
//         <button className='bg-green-500 text-black py-2 px-6 rounded-md text-lg hover:bg-green-800 transition-colors' onClick={onPrev} disabled={currInd===data.length-1}>Prev</button>
//         <button className='bg-green-500 text-black py-2 px-6 rounded-md text-lg hover:bg-green-800 transition-colors' onClick={onNext} disabled={currInd===0}>Next</button>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import { Question } from './Question';
import data from './database/Data';
import { useNavigate } from 'react-router-dom';
import { useUser } from './database/store';

export const Quiz = () => {
  const [currInd, setInd] = useState(0);
  const navigate = useNavigate();
  const { userAnswers, updateUserAnswers, updateUserData } = useUser();

  function onNext() {
    if (currInd < data.length - 1) {
      setInd(currInd + 1);
    }
  }

  function onPrev() {
    if (currInd > 0) {
      setInd(currInd - 1);
    }
  }

  function onAnswerChange(e) {
    updateUserAnswers(currInd, e.target.value);
  }

  function handleSubmit() {
    const score = Object.keys(userAnswers).reduce((score, index) => {
      if (data[index].answer === userAnswers[index]) {
        score += 10; // Assuming each question is worth 10 points
      }
      return score;
    }, 0);

    const userData = {
      username: "Explo65", // Replace this with actual user input
      attempts: Object.keys(userAnswers).length,
      score,
      status: score >= 40 ? "Passed" : "Failed"
    };

    updateUserData(userData);
    navigate('/result');
  }

  return (
    <div className='mx-auto p-8 bg-gray-800 '>
      <h1 className='text-3xl text-center font-bold border-4 text-white rounded-lg'>Quiz</h1>
      <div className='flex justify-center mt-20'>
        {data[currInd] && <Question question={data[currInd]} onAnswerChange={onAnswerChange} />}
      </div>
      <div className='grid grid-cols-3 gap-4 justify-items-center mt-32'>
        <button
          className='bg-green-500 text-black py-2 px-6 rounded-md text-lg hover:bg-green-800 transition-colors'
          onClick={onPrev}
          disabled={currInd === 0}
        >
          Prev
        </button>
      <button
        className='bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-800 transition-colors mt-8'
        onClick={handleSubmit}
      >
        Submit
      </button>
        <button
          className='bg-green-500 text-black py-2 px-6 rounded-md text-lg hover:bg-green-800 transition-colors'
          onClick={onNext}
          disabled={currInd === data.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
