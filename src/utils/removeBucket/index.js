import axios from 'axios';

export function removeBucket(id) {
  return axios
    .delete(`${process.env.REACT_APP_URL}buckets/${id}`, {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      if (error.response.status === 404) {
        alert(` bucket doesn't exist`);
      }
    });
}
