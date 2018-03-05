import React from 'react'
import { connect } from 'react-redux'

import { undo, redo } from '../actions/history-actions'

function Container({disableUndo, disableRedo, onUndoClick, onRedoClick}) {
  return (
    <div>
      <h1>Undo & Redo</h1>
      <button onClick={onUndoClick} disabled={disableUndo}>Undo</button>
      <button onClick={onRedoClick} disabled={disableRedo}>Redo</button>
      <br />
    </div>
  )
}

const mapStateToProps = ({ history }) => {
  return {
    disableUndo: !history.past.length,
    disableRedo: !history.future.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndoClick() {
      dispatch(undo())
    },
    onRedoClick() {
      dispatch(redo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)