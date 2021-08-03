import React from 'react';
import './App.css';

import ToDo from './components/ToDo';
import Done from './components/Done';

function App() {
  return (
    <div className='app'>
      <div className='app_body'>
        <ToDo />
        <Done />
      </div>
    </div>
  );
}

export default App;
