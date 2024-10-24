import React, { useCallback } from 'react'
import { Poll } from '../component/Poll'
import {Questions} from '../utils/MockDB' //questions yahan pe fetch kiye hein
import { useState } from 'react' 



export const BrowsePolls = () => {

  const [questions,setQuestions] = useState(Questions);
  console.log(questions)
  function updateCount(id,modifiedQuestion){
    let copy_questions = [...questions];
    const index = copy_questions.findIndex(question => question.id === id);
    copy_questions[index] = modifiedQuestion;
    setQuestions(copy_questions);
  }


  return (
    
    <div className='pl-8 mt-6'>
      {questions.map((question,index)=> <Poll question={questions[index]} updateCount={updateCount} />)}
    </div>
    
   
  )
}
