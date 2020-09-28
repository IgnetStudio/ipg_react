import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';

import { ContainerDesc } from '../ContainerDesc';

export function ContainerBucket(props) {
  const [locations, setLocation] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + 'locations', {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((response) => {
        setLocation(response.data.locations);
      });
  }, []);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({ name: '', location: '' });

  const formChange = (value, item) => {
    const newState = { ...form, [item]: value };
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
              {locations &&
                locations.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="info" onClick={() => createBucket(form)}>
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

  const createBucket = (form) => {
    const postData = {
      name: form.name,
      location: form.location,
    };

    return axios
      .post(process.env.REACT_APP_URL + 'buckets', postData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        props.onAdd();
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
