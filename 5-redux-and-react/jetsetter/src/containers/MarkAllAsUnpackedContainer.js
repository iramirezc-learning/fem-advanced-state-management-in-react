import React from 'react'
import { connect } from 'react-redux'

import { markAllAsUnpacked } from '../actions/items-actions'

function Button({ onClick }) {
  const handleClick = (e) => {
    onClick(e.target.value)
  }

  return (
    <button className="button full-width" onClick={handleClick}>
      Mark All As Unpacked
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick(value) {
      /**
       * this returns:
       * {
       *  type: "MARK_ALL_AS_UNPACKED"
       * }
       */
      dispatch(markAllAsUnpacked())
    }
  }
}

export default connect(null, mapDispatchToProps)(Button)