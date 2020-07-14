
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BTLayout from './Components/BTLayout/BTLayout';
import BTlayout2 from './Components/BTLayout2/BTlayout2';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div>
      {/* <BTlayout2 /> */}
      <DataBinding />
    </div>
  );
}

export default App;
