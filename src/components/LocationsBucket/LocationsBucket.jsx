import axios from 'axios';

export function LocationsBucket() {
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
