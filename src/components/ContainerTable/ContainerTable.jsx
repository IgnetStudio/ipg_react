import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
// import { ItemsBucket } from '../ItemsBucket';
import { ContainerDesc } from '../ContainerDesc';
import { GetBucket } from '../GetBucket';

export function ContainerTable() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const getData = async () => {
      // console.log(GetBucket);
      const d = await GetBucket();
      // console.log(d);
      setData(d);
    };
    // console.log(getData);
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
              {data &&
                data.locations.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
