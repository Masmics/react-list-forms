import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// create a CreateColor component takes an addColor property
// CreateColor is a form with a name and color input
// on submitting the form invoke the addColor property to add a new color

export default class CreateColor extends PureComponent {

  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  }
  state = {
    name: '',
    color: '#000000'
  }  

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { name, color } = this.state;

    this.props.addColor({ name, hex: color });
  }

  handleColorNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const { name, color } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={name} onChange={this.handleColorNameChange} />
        <input color="color" type="color" value={color} onChange={this.handleColorChange} />
        <button>Add Color</button>
      </form>
    )
  }
}
