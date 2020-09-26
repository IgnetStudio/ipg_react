import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

import { ContainerDesc } from '../ContainerDesc';

export function ContainerBucket() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({ name: '', location: '' });

  const formChange = (value, item) => {
    let newState = { ...form, [item]: value };
    setForm(newState);
  };

  const formContainer = (
    <Form>
      <Form.Row>
        <Col xs={12} md={6}>
          <Form.Label>Bucket Name</Form.Label>
          <Form.Control
            placeholder="MyNewStorage"
            value={form.name}
            onChange={(event) => formChange(event.target.value, 'name')}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Bucket Location</Form.Label>
            <Form.Control
              as="select"
              value={form.location}
              onChange={(event) => formChange(event.target.value, 'location')}
            >
              <option>Kranj</option>
              <option value="test">Ljubljana</option>
              <option>Škofja Loka</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="info" onClick={() => console.log(form)}>
            Create Bucket
          </Button>
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
