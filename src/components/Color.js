import React from 'react';
import PropTypes from 'prop-types';

const hexToDecimal = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const hexToRgb = hex => {
  return {
    red: hexToDecimal(hex.slice(1, 3)),
    green: hexToDecimal(hex.slice(3, 5)),
    blue: hexToDecimal(hex.slice(5, 7))
  };
};

function Color({ name, hex }) {
  const rgb = hexToRgb(hex);
  const display = 'inline-block';
  const ems = '2em';

  const colorStyle = {
    display: display,
    backgroundColor: hex,
    width: ems,
    height: ems
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex} <div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red: {rgb.red}</p>
        <p>Green: {rgb.green}</p>
        <p>Blue: {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired
};

export default Color;
