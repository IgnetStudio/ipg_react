import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
// import { ItemsBucket } from '../ItemsBucket';
import { ContainerDesc } from '../ContainerDesc';
import { GetBucket } from '../GetBucket';

const GetItems = ({ items }) => {
  console.log(items);
  if (items && items.hasOwnProperty('locations') && items.locations.length > 0) {
    // const Rows = () => {
    return items.locations.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        {/* <td>{item.location[0].name}</td> */}
      </tr>
    ));
    // };
  } else {
    // const Rows = () => {
    return (
      <tr>
        <td>placeholder</td>
      </tr>
    );
    // };
  }
};

export function ContainerTable() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const getData = async () => {
      // console.log(GetBucket);
      const d = await GetBucket();
      console.log(d);
      setData(d);
    };
    // console.log(getData);
    getData();
  }, []);

  // console.log(data);

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
