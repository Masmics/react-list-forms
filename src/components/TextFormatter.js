import React, { PureComponent } from 'react';
//import figlet from 'figlet';

export default class PrintText extends PureComponent {
  state = {
    text: '',
    color: 'black'
    //    font: 'banner3-D'
  };

  handleSubmit = event => {
    event.preventDefault();  
  }

  // formatText = () => {
  //   const { text, font } = this.state;
  //   figlet.text(text, {
  //     font: font
  //   }, (err, result) => {
  //     this.setState({ text: result });
  //   });
  // }

  handleTextEntry = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  // handleFontChange = ({ target }) => {
  //   this.setState({ font: target.value });
  // }

  render() {
    const {
      text,
      color
      //      font
    } = this.state;

    // const fontOptions = ['basic', 'broadway', 'doh', 'isometric4', 'poison'].map(font => {
    //   return <option key={font} value={font}>{font}</option>;
    // });

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

//<select name="font" value={font} onChange={this.formatText}>{fontOptions}</select>
