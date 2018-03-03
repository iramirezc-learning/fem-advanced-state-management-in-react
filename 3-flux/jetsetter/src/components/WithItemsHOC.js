import React, { Component } from 'react';

import ItemsStore, { ITEM_EVENT } from '../ItemsStore';

export default function withItemsState(WrappedComponent) {
  class WithItemsState extends Component {
    state = { items: ItemsStore.getItems() };
    updateState = () => {
      console.log('updating items state...');
      this.setState({ items: ItemsStore.getItems() });
    };
    componentDidMount() {
      ItemsStore.on(ITEM_EVENT, this.updateState);
    }
    componentWillUnmount() {
      ItemsStore.off(ITEM_EVENT, this.updateState);
    }
    render() {
      console.log('rendering...');
      return <WrappedComponent {...this.props} items={this.state.items} />;
    }
  }

  return WithItemsState;
}
