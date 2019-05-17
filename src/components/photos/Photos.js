import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const picList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {picList}
    </ul>
  );
}
Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
