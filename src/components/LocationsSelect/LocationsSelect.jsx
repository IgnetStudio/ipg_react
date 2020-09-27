import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function LocationsSelect() {
  const [locations, setLocation] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + 'locations', {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((response) => {
        setLocation(response.data.locations);
      });
  }, []);

  return locations;
}
