import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

import { ContainerDesc } from '../ContainerDesc';

export function ContainerBucket() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formContainer = (
    <Form>
      <Form.Row>
        <Col xs={12} md={6}>
          <Form.Label>Bucket Name</Form.Label>
          <Form.Control placeholder="MyNewStorage" />
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Bucket Location</Form.Label>
            <Form.Control as="select">
              <option>Kranj</option>
              <option>Ljubljana</option>
              <option>Škofja Loka</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="info">Create Bucket</Button>
        </Col>
      </Form.Row>
    </Form>
  );

  const createNewBucketBtn = (
    <Button variant="info" onClick={() => setIsFormOpen(true)}>
      Create New Bucket
    </Button>
  );

  return (
    <>
      <ContainerDesc />
      <Container>
        {!isFormOpen ? createNewBucketBtn : null}
        {isFormOpen ? formContainer : null}
      </Container>
    </>
  );
}
