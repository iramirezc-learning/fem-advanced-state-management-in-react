import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, reset } = this.props;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement} className="full-width">
          Increment
        </button>
        <button onClick={handleDecrement} className="full-width">
          Decrement
        </button>
        <button onClick={reset} className="full-width">
          Reset
        </button>
      </div>
    );
  }
}
