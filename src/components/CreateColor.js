import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {

  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  }
  state = {
    name: '',
    color: '#000000'
  }  

}
