import React from 'react';
import './App.css';

import ToDo from './components/ToDo';

function App() {
  return (
    <div className='app'>
      <div className='app_body'>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
