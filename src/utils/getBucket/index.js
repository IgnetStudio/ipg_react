// import React from 'react';
import axios from 'axios';

export function getBucket() {
  return axios
    .get(process.env.REACT_APP_URL + 'buckets', {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
