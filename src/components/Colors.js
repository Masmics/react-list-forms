import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} hex={color.hex} rgb={color.rgb} />
      </li>
    );
  });

  const display = 'flexbox';

  const colorStyle = {
    display: display,
    backgroundColor: colorList.hex,

  };

  return (
    <ul style={colorStyle}>
      {colorList}
    </ul>
  );
}
Colors.propTypes = {
  colors: PropTypes.array
};

export default Colors;

