import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { ItemsBucket } from '../ItemsBucket';
import { ContainerDesc } from '../ContainerDesc';

export function ContainerTable() {
  return (
    <>
      <ContainerDesc />
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <ItemsBucket name="BestStorage" location="Kranj" />
              </tr>
              <tr>
                <ItemsBucket name="Pics" location="Ljubljana" />
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
