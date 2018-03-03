import React, { Component } from 'react';

import Counter from './Counter';
import WithCounter from './WithCounter';

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        <WithCounter render={props => <Counter {...props} />} />
      </main>
    );
  }
}
