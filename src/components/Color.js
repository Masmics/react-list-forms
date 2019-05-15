import React from 'react';
import PropTypes from 'prop-types';

const colorToHex = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const rgbToHex = rgb => { // (rgb) - why parentheses?
  return `${colorToHex(rgb.red)}${colorToHex(rgb.green)}${colorToHex(rgb.blue)}`;
};

function Color({ name, rgb }) { // <---- why deconstructed?
  const hex = rgbToHex(rgb);
  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '1em',
    height: '1em'
  };

  return (
    <ul>
      <li>
        <li>Color Name: </li>
        <li>{name || hex} <div style={colorStyle}></div></li>
      </li>

      <li>
        <li>Hex: </li>
        <li>{hex} <div style={colorStyle}></div></li>
      </li>

      <li>
        <li>RGB: </li>
        <li>
          <p>Red: {rgb.red}</p>
          <p>Green: {rgb.green}</p>
          <p>Blue: {rgb.blue}</p>
        </li>
      </li>
    </ul>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

export default Color;
