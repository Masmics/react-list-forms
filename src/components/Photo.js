import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photo }) {
  return (
    <li>{photo}</li>
  );
}

Photo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  photo: PropTypes.func.isRequired
};

export default Photo;
