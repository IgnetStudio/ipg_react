import React from 'react';

import { ContainerBucket } from '../components/ContainerBucket';
import { ContainerNavbar } from '../components/ContainerNavbar';
import { ContainerTitle } from '../components/ContainerTitle';
import { ContainerTable } from '../components/ContainerTable';

function PageBucket() {
  return (
    <>
      <ContainerNavbar />
      <ContainerBucket />
      <ContainerTitle />
      <ContainerTable />
    </>
  );
}

export default PageBucket;
