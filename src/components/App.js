import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import picArray from './photos/PicArray';

export default function App() {
  const photos = picArray;
  return (
    <>
      <Header />
      <PhotoAlbum title="
      * Mercury
      * Venus
      * Earth
      * Mars
      * Jupiter
      * Saturn
      * Uranus
      * Neptune" photos={photos} />
      <Footer />
    </>
  );
}

