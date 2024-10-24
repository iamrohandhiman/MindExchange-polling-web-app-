import React from 'react'
import { useState } from 'react'

export const Poll = ({question, updateCount}) => {

  const [clickStatus, setClickStatus] = useState(false);

  function IncrementOptionCount(optionnumber) {
    let modifiedQuestion = { ...question }
    let originalCount = modifiedQuestion[`count${optionnumber}`]
    modifiedQuestion[`count${optionnumber}`] = originalCount + 1;
    updateCount(question.id, modifiedQuestion)
    setClickStatus(true);
  }

  if (!clickStatus) {
    return (
      <>
        <div className='mt-8 w-[700px] bg-gray-100 flex-row  space-y-1 justify-center items-center rounded-sm'>
          <div className='text-blue-950 pl-2 flex justify-start items-center font-Sabon font-semibold text-[30px] underline-offset-2 cursor-default'>
            {question.question}
          </div>

          <div className=' transition-all delay:50 pl-[10px] flex justify-start items-center font-Sabon text-[30px] cursor-pointer w-full hover:text-blue-950 hover:bg-gray-200' onClick={() => IncrementOptionCount(1)}>
            {question.option1}
          </div>

          <div className='transition-all delay:50 pl-[10px] flex justify-start items-center font-Sabon text-[30px] cursor-pointer w-full hover:text-blue-950 hover:bg-gray-200' onClick={() => IncrementOptionCount(2)}>
            {question.option2}
          </div>

          <div className='transition-all delay:50 pl-[10px] flex justify-start items-center font-Sabon text-[30px] cursor-pointer w-full hover:text-blue-950 hover:bg-gray-200' onClick={() => IncrementOptionCount(3)}>
            {question.option3}
          </div>

          <div className='transition-all delay:50 pl-[10px] flex justify-start items-center font-Sabon text-[30px] cursor-pointer w-full hover:text-blue-950 hover:bg-gray-200' onClick={() => IncrementOptionCount(4)}>
            {question.option4}
          </div>

          <div className='flex justify-end items-center font-Sabon text-[12px] pl-[10px] w-full h-[20px] pr-1'>
            {question.subtopic}
          </div>
        </div>
      </>
    )
  } else {
    let sum = question.count1 + question.count2 + question.count3 + question.count4;

    let width1 = (700 * question.count1) / sum;
    let width2 = (700 * question.count2) / sum;
    let width3 = (700 * question.count3) / sum;
    let width4 = (700 * question.count4) / sum;

    return (
      <>
        <div className=' mt-8 transition-all delay:50 w-[700px] bg-gray-100  flex-row space-y-1 justify-center items-center rounded-sm'>
          <div className='text-blue-950 pl-2 flex justify-start items-center font-Sabon font-semibold text-[30px] underline-offset-2 cursor-default '>
            {question.question}
          </div>

          <div className='transition-all delay:50 relative   pl-[10px] flex justify-between items-center font-Sabon text-[30px] cursor-default w-full text-white'>
            <div className='z-20 pl-2'>{question.option1}</div>
            <div className='absolute h-full border-[3px] border-black bg-blue-500 z-10' style={{ width: `${width1}px` }}></div>
            <div className='pr-7 text-gray-800'>{((question.count1 / sum) * 100).toFixed(1)}%</div>
          </div>

          <div className='transition-all delay:50 relative pl-[10px] flex justify-between items-center font-Sabon text-[30px] cursor-default w-full  text-white'>
            <div className='z-20 pl-2'>{question.option2}</div>
            <div className='absolute h-full border-[3px] border-black bg-blue-500 z-10' style={{ width: `${width2}px` }}></div>
            <div className='pr-7 text-gray-800'>{((question.count2 / sum) * 100).toFixed(1)}%</div>
          </div>

          <div className='transition-all delay:50 relative pl-[10px] flex justify-between items-center font-Sabon text-[30px] cursor-default w-full  text-white'>
            <div className='z-20 pl-2' >{question.option3}</div>
            <div className='absolute h-full border-[3px] border-black bg-blue-500 z-10' style={{ width: `${width3}px` }}></div>
            <div className='pr-7 pl-2 text-gray-800'>{((question.count3 / sum) * 100).toFixed(1)}%</div>
          </div>

          <div className='transition-all delay:50 relative pl-[10px] flex justify-between items-center font-Sabon text-[30px] cursor-default w-full  text-white'>
            <div className='z-20 pl-2'>{question.option4}</div>
            <div className='absolute h-full border-[3px] border-black bg-blue-500 z-10' style={{ width: `${width4}px` }}></div>
            <div className='pr-7 text-gray-800'>{((question.count4 / sum) * 100).toFixed(1)}%</div>
          </div>

          <div className='flex justify-end items-center font-Sabon text-[12px] pl-[10px] w-full h-[20px] pr-1'>
            {question.subtopic}
          </div>

          <div className='flex justify-end items-center font-Sabon text-[20px] pl-[10px] w-full h-[40px] underline pr-1'>
            Total Votes : {sum}
          </div>
        </div>
      </>
    )
  }
}
