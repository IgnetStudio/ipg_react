import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
// import React from 'react';
import axios from 'axios';

import { ContainerDesc } from '../ContainerDesc';
import { LocationsBucket } from '../LocationsBucket';

export function ContainerBucket() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({ name: '', location: '' });

  const formChange = (value, item) => {
    let newState = { ...form, [item]: value };
    setForm(newState);
  };

  const locations = LocationsBucket();

  console.log(locations);

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
              {locations.map((item) => (
                <option key={item.key}>{item.name}</option>
              ))}
              <option value="test">Ljubljana</option>
              <option>Škofja Loka</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="info" onClick={(event) => createBucket(form)}>
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

  const createBucket = (event, data) => {
    console.log(data);
    return axios
      .post(process.env.REACT_APP_URL + 'buckets', {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
        },
        postData: {
          name: '',
          location: '',
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
