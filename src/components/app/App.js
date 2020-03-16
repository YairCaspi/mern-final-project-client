import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainLeftComp from '../LeftZone/Main';
import MainRightComp from '../RightZone/Main';
import './App.css';

function App(props) {

  return (
    <div className='main-app-container'>
      {/* <BrowserRouter> */}
        <MainLeftComp/>
        <MainRightComp/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

