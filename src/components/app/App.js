import React from 'react';

import MainLeftComp from '../LeftZone/Main';
import MainRightComp from '../RightZone/Main';
import './App.css';

function App(props) {

  return (
    <div className='main-app-container'>
      <MainLeftComp/>
      <MainRightComp/>
    </div>
  );
}

export default App;

