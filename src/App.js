import React from 'react';
import './Components/style.css'
import Main from './Components/Main';
import fetchDataAndLog from './fetchAndLog';

function App() {
  fetchDataAndLog();
  return (
    <div className="App">

    <Main />

    </div>
  );
}

export default App;
