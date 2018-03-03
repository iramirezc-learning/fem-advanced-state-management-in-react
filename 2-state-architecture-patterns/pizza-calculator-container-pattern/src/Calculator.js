import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

export default class Calculator extends Component {
  render() {
    const {
      numberOfPeople,
      onUpdateNumberOfPeople,
      slicesPerPerson,
      onUpdateSlicesPerPerson,
      onReset
    } = this.props;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <div>
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={onUpdateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          onChange={onUpdateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}
