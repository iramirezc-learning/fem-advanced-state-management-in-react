import React, { Component } from 'react';

import Calculator from './Calculator';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

export default class CalculatorContainer extends Component {
  state = { ...initialState };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;

    return (
      <Calculator
        numberOfPeople={numberOfPeople}
        onUpdateNumberOfPeople={this.updateNumberOfPeople}
        slicesPerPerson={slicesPerPerson}
        onUpdateSlicesPerPerson={this.updateSlicesPerPerson}
        onReset={this.reset}
      />
    );
  }
}
