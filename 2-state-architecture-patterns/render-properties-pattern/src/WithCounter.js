import React, { Component } from 'react';

export default class WithCounter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    const { handleIncrement, handleDecrement, reset } = this;
    return (
      <section className="Counter">{this.props.render({ count, handleIncrement, handleDecrement, reset })}</section>
    );
  }
}
