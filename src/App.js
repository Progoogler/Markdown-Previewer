import React, { Component } from 'react';
import Marked from "marked";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Header \n====== \n\nSub-heading \n--------- \n\n### Another sub-heading \n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping List:\n\n* bread\n* more bread\n* lots of peanut butter\n\nNumbered List:\n\n1. One\n2. Two\n3. Three\n\n*[Andy Li](https://freecodecamp.com/progoogler)*',
      output: [],
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="Title">Markdown Previewer</div>
        <textarea
          className="TextArea"
          onChange={this.handleTextInput}
          value={this.state.value}
          rows="25" cols="40" />
        <div className="Markdown-Display" dangerouslySetInnerHTML={{__html: this.state.output[0]}}></div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({output: [Marked(this.state.value)]});
  }

  handleTextInput(event) {
    this.setState({value: event.target.value, output: [Marked(event.target.value)]});
  }
}

export default App;
