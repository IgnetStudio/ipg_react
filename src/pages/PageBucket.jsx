import React, { useState, useEffect } from 'react';

import { ContainerBucket } from '../components/ContainerBucket';
import { ContainerNavbar } from '../components/ContainerNavbar';
import { ContainerTitle } from '../components/ContainerTitle';
import { ContainerTable } from '../components/ContainerTable';

import { getBucket } from '../utils/getBucket';

function PageBucket() {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const newBucket = await getBucket();
      setBuckets(newBucket);
    };
    getData();
  }, []);

  return (
    <>
      <ContainerNavbar />
      <ContainerBucket />
      <ContainerTitle />
      <ContainerTable data={buckets} />
    </>
  );
}

export default PageBucket;
