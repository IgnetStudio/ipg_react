import React from 'react';

import { ContainerDesc } from './components/ContainerDesc';
import { ContainerNavbar } from './components/ContainerNavbar';
import { ContainerTitle } from './components/ContainerTitle';
import { ContainerTable } from './components/ContainerTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ContainerNavbar />
      <ContainerTitle />
      <ContainerDesc />
      <ContainerTable />
    </div>
  );
}

export default App;
