import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';

// PhotoAlbum takes a title and an array of photos as properties
// display the title of the album
// display all photos using the Photos component

function PhotoAlbum({ title, photos }) {
  return (
    <section key={photos} className={styles.PhotoAlbum}>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
