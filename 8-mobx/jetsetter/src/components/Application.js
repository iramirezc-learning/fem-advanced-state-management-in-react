import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';
import Filter from './Filter';

import './Application.css';

import { inject, observer } from 'mobx-react';

const PackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items title="Packed Items" items={itemList.filteredPackedList}>
      <Filter
        searchTerm={itemList.searchFilter.packedItems}
        onChange={itemList.updatePackedItemsFilter}
      />
    </Items>
  )),
);

const UnpackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items title="Unpacked Items" items={itemList.filteredUnpackedList}>
      <Filter
        searchTerm={itemList.searchFilter.unpackedItems}
        onChange={itemList.updateUnpackedItemsFilter}
      />
    </Items>
  )),
);

const MarkAllAsUnpacked = inject('itemList')(
  observer(({itemList}) => (
    <button className="button full-width" onClick={itemList.markAllAsUnpacked}>
      Mark All As Unpacked
    </button>
  ))
)

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem />
        <UnpackedItems />
        <PackedItems />
        <MarkAllAsUnpacked />
      </div>
    );
  }
}

export default Application;
