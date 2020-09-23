import React from 'react';
import { Button, Col, Container, Navbar, Row, Table } from 'react-bootstrap';

import { LabelCounter } from './components/LabelCounter';
import { ItemName } from './components/ItemsList';
import { ItemLocation } from './components/ItemsList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navbar bg="light">
            <Navbar.Brand>Secure cloud storage</Navbar.Brand>
          </Navbar>
        </Row>
      </Container>
      <Container>
        <Row>
          <h2>Bucket list</h2>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <LabelCounter label="All Buckets" counter={4} />
            <Button variant="info">Create New Bucket</Button>
          </Col>
        </Row>
      </Container>
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
                <ItemName name="BestStorage" />
                <ItemLocation location="Kranj" />
              </tr>
              <tr>
                <ItemName name="Pics" />
                <ItemLocation location="Ljubljana" />
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
