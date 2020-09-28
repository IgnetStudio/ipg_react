import React from 'react';

import PageBucket from './pages/PageBucket';
// import { ContainerStorage } from './components/ContainerStorage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <PageBucket />
      {/* <ContainerStorage /> */}
    </div>
  );
}

export default App;
