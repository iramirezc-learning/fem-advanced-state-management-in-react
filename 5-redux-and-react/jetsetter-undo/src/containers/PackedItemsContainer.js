import { connect } from 'react-redux'

import Items from '../components/Items'
import { toggleItem, removeItem } from '../actions/items-actions'

const mapStateToProps = ({ currentState }) => {
  const searchTerm = currentState.filter.packedItemsFilter;

  return {
    title: 'Packed Items',
    items: currentState.items.filter(item => item.packed && item.value.toLowerCase().includes(searchTerm.toLowerCase())),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove({ id }) {
      dispatch(removeItem(id))
    },
    onCheckOff({ id }) {
      dispatch(toggleItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)