import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { LabelCounter } from '../LabelCounter';

export function ContainerDesc() {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <LabelCounter label="All Buckets" counter={4} />
            {/* <Button variant="info">Create New Bucket</Button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
