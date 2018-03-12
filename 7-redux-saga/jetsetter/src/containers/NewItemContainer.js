import { connect } from 'react-redux'

import NewItem from '../components/NewItem'
import { saveNewItem } from '../actions/items-actions'
import { updateNewItemValue } from '../actions/new-item-actions'

const mapStateToProps = ({ newItemValue }) => {
  return {
    value: newItemValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch(updateNewItemValue(value))
    },
    onSubmit(value) {
      dispatch(saveNewItem(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)