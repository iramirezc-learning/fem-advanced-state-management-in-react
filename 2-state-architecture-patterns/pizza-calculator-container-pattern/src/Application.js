import React, { Component } from 'react';

import CalculatorContainer from './CalculatorContainer';

export default class Application extends Component {
  render() {
    return (
      <div className="Application">
        <CalculatorContainer />
      </div>
    );
  }
}
