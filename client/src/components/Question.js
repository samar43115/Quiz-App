// import React, { useEffect, useState } from 'react'
// import data from './database/Data'
// export const Question = ({question}) => {
//     const [checked, setChecked] = useState(false)
//     useEffect(() => {
//         console.log(data)
//     }, [])
//     function onSelect() {
//         setChecked(!checked)
//         console.log('option selected');
//     }
//     // const question = data[0];
//     return (
//         <div className='p-4'>
//             <h2 className='text-lg font-bold text-white mb-6'>{question.question}</h2>
//             <ul key={question.id}>
//                 {
//                     question.options.map((option, ind) => (
//                         <li key={ind}>
//                             <input className='mr-2'
//                                 type='radio'
//                                 value={checked}
//                                 name='option'
//                                 id={`option${ind}`}
//                                 onChange={onSelect}
//                             />
//                             <label className='text-white' htmlFor={`option${ind}`}>{option}</label>
//                         </li>
//                     ))
//                 }

//             </ul>
//         </div>
//     )
// }

import React from 'react';

export const Question = ({ question, onAnswerChange }) => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-bold text-white mb-6'>{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((option, ind) => (
          <li key={ind}>
            <input
              className='mr-2'
              type='radio'
              value={option}
              name='option'
              id={`option${ind}`}
              onChange={onAnswerChange}
            />
            <label className='text-white' htmlFor={`option${ind}`}>
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

