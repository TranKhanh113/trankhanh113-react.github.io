
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BTLayout from './Components/BTLayout/BTLayout';
import BTlayout2 from './Components/BTLayout2/BTlayout2';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BTChonXe from './RenderWithState/BTChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div>
      {/* <BTLayout /> */}
      {/* <BTlayout2 /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BTChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
