import React, { useState, useEffect } from 'react';
import { Poll } from '../component/Poll';
import { Header} from '../layouts/Header'
import axios from 'axios';

export const BrowsePolls = () => {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the questions!", error);
      });
  }, []);

  // Filter questions based on search query
  const filteredQuestions = questions.filter(question => {
    const search = searchQuery.toLowerCase();
    return (
      question.question.toLowerCase().includes(search) ||
      question.subtopic.toLowerCase().includes(search) ||
      question.option1.toLowerCase().includes(search) ||
      question.option2.toLowerCase().includes(search) ||
      question.option3.toLowerCase().includes(search) ||
      question.option4.toLowerCase().includes(search)
    );
  });

  function updateCount(id, modifiedQuestion) {
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
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='pl-8 mt-6'>
        {filteredQuestions.map((question) => (
          <Poll 
            key={question.id} 
            question={question} 
            updateCount={updateCount} 
          />
        ))}
      </div>
    </>
  );
};