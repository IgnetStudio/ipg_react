import React from 'react';
import PropTypes from 'prop-types';

export function ItemsList({ name, location }) {
  return (
    <>
      <td>{name}</td>
      <td>{location}</td>
    </>
  );
}

ItemsList.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
