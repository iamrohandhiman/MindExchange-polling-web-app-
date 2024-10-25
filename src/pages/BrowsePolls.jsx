import React, { useCallback } from 'react'
import { Poll } from '../component/Poll'
import { useEffect } from 'react';
import { useState } from 'react' 
import axios from 'axios';



export const BrowsePolls = () => {



  const [questions,setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/questions')
      .then(response => {
        setQuestions(response.data);  
      })
      .catch(error => {
        console.error("There was an error fetching the questions!", error);
      });

  }, []);

  console.log(questions)
  function updateCount(id,modifiedQuestion){
    let copy_questions = [...questions];
    const index = copy_questions.findIndex(question => question.id === id);
    copy_questions[index] = modifiedQuestion;
    setQuestions(copy_questions);

     axios.put(`http://localhost:5000/api/questions/${id}`, modifiedQuestion)
      .then(response => {
        console.log("Successfully updated in backend", response.data);
      })
      .catch(error => {
        console.error("Error updating the backend:", error);
      });
  }


  return (
    
    <div className='pl-8 mt-6'>
      {questions.map((question,index)=> <Poll question={questions[index]} updateCount={updateCount} />)}
    </div>
    
   
  )
}
