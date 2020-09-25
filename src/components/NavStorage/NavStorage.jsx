import React from 'react';
import { Container, Nav } from 'react-bootstrap';

export function NavStorage() {
  return (
    <>
      <Container>
        <Nav activeKey="/files" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
          <Nav.Item>
            <Nav.Link href="/files">Files</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="details">Bucket details</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}
