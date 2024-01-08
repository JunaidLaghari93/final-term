import React, { useState } from 'react';

function PageOne() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Input and Textarea</h1>

      <div className="mb-4">
        <label htmlFor="inputField" className="block text-sm font-semibold mb-1">Input Box:</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="textareaField" className="block text-sm font-semibold mb-1">Textarea:</label>
        <textarea
          id="textareaField"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}

export default PageOne;








