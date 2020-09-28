import React from 'react';
import { Container } from 'react-bootstrap';

import { WrapperStorage } from '../WrapperStorage';
import { NavStorage } from '../NavStorage';
import { InputFile } from '../InputFile';

export function ContainerStorage() {
  return (
    <>
      <Container>
        <NavStorage />
        <WrapperStorage />
        <InputFile />
      </Container>
    </>
  );
}
