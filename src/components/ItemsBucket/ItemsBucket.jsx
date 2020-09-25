import React from 'react';
import PropTypes from 'prop-types';

export function ItemsBucket({ name, location }) {
  return (
    <>
      <td>{name}</td>
      <td>{location}</td>
    </>
  );
}

ItemsBucket.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
