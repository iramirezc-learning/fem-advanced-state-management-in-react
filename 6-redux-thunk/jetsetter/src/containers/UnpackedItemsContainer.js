import { connect } from 'react-redux'

import Items from '../components/Items'
import { toggleItem, removeItem } from '../actions/items-actions'

const mapStateToProps = ({ items, filter }) => {
  const searchTerm = filter.unpackedItemsFilter;

  return {
    title: 'Unpacked Items',
    items: items.filter(item => !item.packed && item.value.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckOff({id}) {
      dispatch(toggleItem(id))
    },
    onRemove({id}) {
      dispatch(removeItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)