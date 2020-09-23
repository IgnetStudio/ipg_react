import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import { LabelCounter } from './components/LabelCounter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <LabelCounter label="All Buckets" counter={4} />
            <Button variant="info">Create New Bucket</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
