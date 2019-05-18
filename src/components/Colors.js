import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

// create a Colors component that takes an array of colors
// a color has name, hex, and rgb
// for each color in the array create a Color component
// display all Color components in a ul

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}
Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;

