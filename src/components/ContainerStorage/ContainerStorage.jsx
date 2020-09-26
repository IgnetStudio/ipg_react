import React from 'react';
import { Container } from 'react-bootstrap';

import { WrapperStorage } from '../WrapperStorage';
import { NavStorage } from '../NavStorage';

export function ContainerStorage() {
  return (
    <>
      <Container>
        <NavStorage />
        <WrapperStorage />
      </Container>
    </>
  );
}
