import React from 'react';

import { Container, Row, Table } from 'react-bootstrap';
import { ContainerDesc } from '../ContainerDesc';

const GetItems = ({ items }) => {
  if (items && items.hasOwnProperty('buckets') && items.buckets.length > 0) {
    return items.buckets.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>placeholder</td>
      </tr>
    ));
  } else {
    return (
      <tr>
        <td>no data</td>
      </tr>
    );
  }
};

export function ContainerTable(props) {
  return (
    <>
      <ContainerDesc />
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <GetItems items={props.data} />
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
