import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photo }) {
  return (
    <li>{photo}</li>
  );
}

Photo.propTypes = {

  photo: PropTypes.object.isRequired
};

export default Photo;
