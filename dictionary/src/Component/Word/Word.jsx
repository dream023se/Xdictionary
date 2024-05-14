import React, { useState } from 'react';

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const foundWord = dictionary.find(item =>
      item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition:</h2>
      <p>{result}</p>
    </div>
  );
}

export default XDictionary;
