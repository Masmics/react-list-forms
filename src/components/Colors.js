import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {

  const colorsList = colors.map(({ name, hex, rgb }) => (
    // eslint-disable-next-line react/jsx-key
    <li>
      <Color key={`${name}-${hex}-${rgb}`} name={name} hex={hex} rgb={rgb} />
    </li>
  ));

  return (
    <ul>
      {colorsList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
