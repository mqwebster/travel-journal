import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

import data from './data.js';

import './App.css';

function App() {
  const locations = data.map((location) => {
    return <Card key={location.id} {...location} array={data} />;
  });

  return (
    <div className='App'>
      <Header />

      <div className='card-grid'>
        <div className='card-grid__wrap'>{locations}</div>
      </div>
    </div>
  );
}

export default App;
