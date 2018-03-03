import { connect } from 'react-redux';

import Input from '../components/Input'
import { updateNumberOfPeople } from '../actions'

const mapStateToProps = (state) => {
  const { numberOfPeople } = state
  
  console.log({state})
  
  return {
    label: 'Number of People',
    value: numberOfPeople,
    type: 'number',
    min: 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      console.log('changing...', { value })
      dispatch(updateNumberOfPeople(value))
    }
  }
}

// this creates a Higher Order Component
export default connect(mapStateToProps, mapDispatchToProps)(Input)