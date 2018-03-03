import React, { Component } from 'react';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withCalculator(WrappedComponent) {
  return class WithCalculator extends Component {
    // Display Name for WrapperComponent
    // constructor() {
    //   super();
    //   WithCalculator.displayName = `WithCalculator(${getDisplayName(WrappedComponent)})`;
    // }
    static displayName = `WithCalculator(${getDisplayName(WrappedComponent)})`;
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
        <WrappedComponent
          numberOfPeople={numberOfPeople}
          onUpdateNumberOfPeople={this.updateNumberOfPeople}
          slicesPerPerson={slicesPerPerson}
          onUpdateSlicesPerPerson={this.updateSlicesPerPerson}
          onReset={this.reset}
          {...this.props}
        />
      );
    }
  };
}
