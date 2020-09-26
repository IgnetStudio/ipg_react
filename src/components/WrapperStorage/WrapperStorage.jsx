import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { ItemsStorage } from '../ItemsStorage';

export function WrapperStorage() {
  return (
    <>
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Last modified</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <ItemsStorage
                  fileIcon="BestStorage"
                  fileName="FileName01"
                  fileDate="06.09.2015"
                  fileSize="2MB"
                />
              </tr>
              <tr>
                <ItemsStorage
                  fileIcon="BestStorage"
                  fileName="FileName02"
                  fileDate="05.01.2015"
                  fileSize="100KB"
                />
              </tr>
              <tr>
                <ItemsStorage
                  fileIcon="BestStorage"
                  fileName="FileName03"
                  fileDate="12.11.2016"
                  fileSize="2MB"
                />
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      ;
    </>
  );
}
