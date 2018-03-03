import React, { Component } from 'react';

import withCalculator from './HOC-CalculatorContainer';
import Pizza from './Pizza';

const PizzaWithCalculator = withCalculator(Pizza);

export default class Application extends Component {
  render() {
    return (
      <div className="Application">
        <PizzaWithCalculator />
      </div>
    );
  }
}
