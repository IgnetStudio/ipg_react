import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';

import { ItemsList } from './components/ItemsList';
import { ContainerDesc } from './components/ContainerDesc';
import { ContainerNavbar } from './components/ContainerNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ContainerNavbar />
      <Container>
        <Row>
          <h2>Bucket list</h2>
        </Row>
      </Container>
      <ContainerDesc />
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <ItemsList name="BestStorage" location="Kranj" />
              </tr>
              <tr>
                <ItemsList name="Pics" location="Ljubljana" />
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
