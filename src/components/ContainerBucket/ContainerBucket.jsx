import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

import { ContainerDesc } from '../ContainerDesc';

export function ContainerBucket() {
  return (
    <>
      <ContainerDesc />
      <Container>
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Button variant="info">Create New Bucket</Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </>
  );
}