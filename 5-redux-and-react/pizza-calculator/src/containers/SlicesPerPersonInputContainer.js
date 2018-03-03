import { connect } from 'react-redux';

import Input from '../components/Input'
import { updateSlicesPerPerson } from '../actions'

const mapStateToProps = (state) => {
  const { slicesPerPerson } = state
  
  console.log({state})
  
  return {
    label: 'Slices Per Person',
    value: slicesPerPerson,
    type: 'number',
    min: 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      console.log('changing...', { value })
      dispatch(updateSlicesPerPerson(value))
    }
  }
}

// this creates a Higher Order Component
export default connect(mapStateToProps, mapDispatchToProps)(Input)