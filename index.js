import React, { Component } from 'react';
import { render } from 'react-dom';
import CalculatorApp from './components/Calculator.component';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <CalculatorApp />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
