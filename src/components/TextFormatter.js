import React, { PureComponent } from 'react';

export default class PrintText extends PureComponent {
  state = {
    text: '',
    color: 'black'
  };

  handleSubmit = event => {
    event.preventDefault();  
  }

  handleTextEntry = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const {
      text,
      color
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input name="text" value={text} onChange={this.handleTextEntry} />
          <select name="color" value={color} onChange={this.handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>

          <pre style={{ color }}>{text}</pre>
        </form>
      </>
    );
  }
}
