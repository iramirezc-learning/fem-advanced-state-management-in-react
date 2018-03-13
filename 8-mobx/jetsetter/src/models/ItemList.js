import { observable, computed, action } from 'mobx';
import Item from './item';

export default class ItemList {
  @observable items = [];
  @observable searchFilter = {
    packedItems: '',
    unpackedItems: ''
  }

  @computed
  get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed
  get unpackedItems() {
    return this.items.filter(item => item.unpacked);
  }

  @computed
  get filteredUnpackedList() {
    return this.unpackedItems.filter(item =>
      item.value.includes(this.searchFilter.unpackedItems),
    );
  }

  @computed
  get filteredPackedList() {
    return this.packedItems.filter(item =>
      item.value.includes(this.searchFilter.packedItems),
    );
  }

  @action.bound
  addItem(item) {
    this.items.push(new Item(item, this));
  }

  @action.bound
  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  @action.bound updatePackedItemsFilter(value) {
    this.searchFilter.packedItems = value;
  }

  @action.bound updateUnpackedItemsFilter(value) {
    this.searchFilter.unpackedItems = value;
  }

  @action.bound markAllAsUnpacked () {
    this.items.forEach(i => i.packed = false);
  }
}
