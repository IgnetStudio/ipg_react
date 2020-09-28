import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';

// import axios from 'axios';

const targetHelper = (e) => {
  console.log(e.target.value);
  // console.log(e);
};

export function InputFile() {
  return (
    <>
      <Container>
        <Row>
          <Form>
            <Form.File id="custom-file" label="Custom file input" custom onChange={targetHelper} />
          </Form>
        </Row>
      </Container>
      ;
    </>
  );
}
