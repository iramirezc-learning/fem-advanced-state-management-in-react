import React from 'react';

import CountDown from './CountDown';
import UndoRedoContainer from '../containers/UndoRedoContainer'
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer'
import NewItemContainer from '../containers/NewItemContainer'
import PackedFilterContainer from '../containers/PackedFilterContainer'
import PackedItemsContainer from '../containers/PackedItemsContainer'
import UnpackedFilterContainer from '../containers/UnpackedFilterContainer'
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer'

import './Application.css';

function Application() {
  return (
    <div className="Application">
      <UndoRedoContainer />
      <NewItemContainer />
      <CountDown />
      <UnpackedItemsContainer render={<UnpackedFilterContainer />} />
      <PackedItemsContainer render={<PackedFilterContainer />} />
      <MarkAllAsUnpackedContainer />
    </div>
  );
}

export default Application;
