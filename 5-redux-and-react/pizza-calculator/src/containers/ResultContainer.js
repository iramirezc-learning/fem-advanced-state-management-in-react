import { connect } from 'react-redux';

import Result from '../components/Result'

const mapStateToProps = (state) => {
  const { numberOfPizzasNeeded } = state
  
  console.log({state})
  
  return {
    amount: numberOfPizzasNeeded
  }
}

// this creates a Higher Order Component
export default connect(mapStateToProps)(Result)