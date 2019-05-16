import React from 'react'; // { Component }
import PropTypes from 'prop-types';
// import Home from './Home';
// import About from './About';
// import Blog from './Blog';
// import Contact from './Contact';
import styles from './Sidebar.css';

// <Sidebar />

function Sidebar({ children }) {
  return (
    <nav className={styles.Sidebar}>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
