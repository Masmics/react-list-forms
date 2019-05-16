import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {

  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Welcome to the Home Page!',
    about: 'All about this site! (Hint: it exists)',
    blog: 'So, today I made this thing...',
    contact: 'What is, something you should not let your hands make with a cactus?',
  };
  // Sidebar below links in the content from Sidebar.js
  return (
    <section className={styles.App}>
      <Sidebar>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}
