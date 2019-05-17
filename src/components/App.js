import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import photos from './photos/PicArray';

export default function App() {
  return (
    <>
      <Header />
      <PhotoAlbum title="Our Solar System" photos={photos} />
      <Footer />
    </>
  );
}

