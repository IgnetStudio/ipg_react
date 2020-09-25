import React from 'react';
import { Container } from 'react-bootstrap';

import { ContainerTable } from '../ContainerTable';
import { NavStorage } from '../NavStorage';

export function ContainerStorage() {
  return (
    <>
      <Container>
        <NavStorage />
        <ContainerTable />
      </Container>
    </>
  );
}
