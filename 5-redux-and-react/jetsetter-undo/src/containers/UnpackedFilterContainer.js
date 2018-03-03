import { connect } from 'react-redux'

import Filter from '../components/Filter'
import { updateUnpackedItemsFilter } from '../actions/filter-actions'


const mapStateToProps = ({ filter }) => {
  return {
    searchTerm: filter.unpackedItemsFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch(updateUnpackedItemsFilter(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)