import { connect } from 'react-redux'

import NewItem from '../components/NewItem'
import { addNewItem } from '../actions/items-actions'
import { updateNewItemValue } from '../actions/new-item-actions'

const mapStateToProps = ({ currentState }) => {
  return {
    value: currentState.newItemValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch(updateNewItemValue(value))
    },
    onSubmit(value) {
      dispatch(addNewItem(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)