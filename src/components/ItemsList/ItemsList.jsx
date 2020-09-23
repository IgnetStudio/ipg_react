import React from 'react';
import PropTypes from 'prop-types';

export function ItemName({ name }) {
  return (
    <td>
      {name}
    </td>
  );
}

export function ItemLocation({ location }) {
  return (
    <td>
      {location}
    </td>
  );
}

ItemName.propTypes = {
  name: PropTypes.string.isRequired,
};

ItemLocation.propTypes = {
  location: PropTypes.string.isRequired,
};
