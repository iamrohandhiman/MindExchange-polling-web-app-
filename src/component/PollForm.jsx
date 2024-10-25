import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PollForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    subtopic: ''
  });

  const categories = [
    { value: 'geopolitics', label: 'Geopolitics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'movies', label: 'Movies' },
    { value: 'music', label: 'Music' },
    { value: 'rap', label: 'Rap' },
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'physics', label: 'Physics' },
    { value: 'technology', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'food', label: 'Food & Cuisine' },
    { value: 'travel', label: 'Travel' },
    { value: 'literature', label: 'Literature' },
    { value: 'art', label: 'Art' }
  ];

  const [error, setError] = useState('');
  const [showCustomSubtopic, setShowCustomSubtopic] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubtopicChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setShowCustomSubtopic(true);
      setFormData(prev => ({ ...prev, subtopic: '' }));
    } else {
      setShowCustomSubtopic(false);
      setFormData(prev => ({ ...prev, subtopic: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const newPoll = {
      ...formData,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };

    try {
      await axios.post('http://localhost:5000/api/questions', newPoll);
      navigate('/');
    } catch (error) {
      setError('Error creating poll. Please try again.');
      console.error('Error creating new poll:', error);
    }
  };

  return (
    <div className="max-w-2xl  px-4">
      <div className="  p-6 ">
        <h2 className="text-blue-950 font-Sabon font-semibold text-[50px] mb-6">
          Create New Poll
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 pl-10 ">
            <label className="flex-col justify-center items-center font-Sabon text-xl text-black ">
               <span className='text-[30px]'>Question  <span className='text-[20px] underline'> Need an opinion? ask the world!</span></span>
            </label>
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full p-2 border-[3px] border-blue-300 font-Sabon text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="space-y-2">
              <label className="block font-Sabon text-xl text-blue-950">
                Option {num}
              </label>
              <input
                type="text"
                name={`option${num}`}
                value={formData[`option${num}`]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded font-Sabon text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          ))}

          <div className="space-y-2">
            <label className="block font-Sabon text-xl text-blue-950">
              Category
            </label>
            <select
              value={showCustomSubtopic ? 'custom' : formData.subtopic}
              onChange={handleSubtopicChange}
              className="w-full p-2 border border-gray-300 rounded font-Sabon text-lg focus:outline-none focus:border-blue-500 bg-white"
              required
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
              <option value="custom">Custom Category</option>
            </select>
          </div>

          {showCustomSubtopic && (
            <div className="space-y-2">
              <label className="block font-Sabon text-xl text-blue-950">
                Custom Category
              </label>
              <input
                type="text"
                name="subtopic"
                value={formData.subtopic}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded font-Sabon text-lg focus:outline-none focus:border-blue-500"
                required
                placeholder="Enter custom category"
              />
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-Sabon text-xl px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Create Poll
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="bg-gray-300 text-gray-700 font-Sabon text-xl px-6 py-2 rounded hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PollForm;