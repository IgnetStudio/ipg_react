// import React from 'react';
import axios from 'axios';

export function GetBucket() {
  // return false;
  return axios
    .get(process.env.REACT_APP_URL + 'locations', {
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
