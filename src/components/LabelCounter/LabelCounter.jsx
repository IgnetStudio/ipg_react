import React from 'react';
import PropTypes from 'prop-types';

export function LabelCounter({ counter, label }) {
  return (
    <p>
      {label} ({counter})
    </p>
  );
}

LabelCounter.propTypes = {
  label: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};
