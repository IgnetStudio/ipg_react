import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { LabelCounter } from '../LabelCounter';

export function ContainerDesc(props) {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <LabelCounter label="All Buckets" counter={props.counter} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
