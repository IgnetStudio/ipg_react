import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { ItemsList } from '../ItemsList';

export function ContainerTable() {
  return (
    <>
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
                <ItemsList name="BestStorage" location="Kranj" />
              </tr>
              <tr>
                <ItemsList name="Pics" location="Ljubljana" />
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      ;
    </>
  );
}