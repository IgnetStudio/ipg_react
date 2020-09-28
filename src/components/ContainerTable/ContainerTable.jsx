import React, { useEffect, useState } from 'react';

import { Container, Row, Table } from 'react-bootstrap';
import { ContainerDesc } from '../ContainerDesc';
import { getBucket } from '../../utils/getBucket';

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
        <td>placeholder</td>
      </tr>
    );
  }
};

export function ContainerTable() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const newBucket = await getBucket();
      setData(newBucket);
    };
    getData();
  }, []);

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
              <GetItems items={data} />
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
