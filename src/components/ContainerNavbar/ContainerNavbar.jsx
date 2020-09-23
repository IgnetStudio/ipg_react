import React from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';

export function ContainerNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Navbar bg="light">
            <Navbar.Brand>Secure cloud storage</Navbar.Brand>
          </Navbar>
        </Row>
      </Container>
      ;
    </>
  );
}
