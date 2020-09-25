import React from 'react';

import { ContainerBucket } from './components/ContainerBucket';
import { ContainerNavbar } from './components/ContainerNavbar';
import { ContainerTitle } from './components/ContainerTitle';
import { ContainerTable } from './components/ContainerTable';
import { NavStorage } from './components/NavStorage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ContainerNavbar />
      <ContainerBucket />
      <ContainerTitle />
      <ContainerTable />
      <NavStorage />
    </div>
  );
}

export default App;
