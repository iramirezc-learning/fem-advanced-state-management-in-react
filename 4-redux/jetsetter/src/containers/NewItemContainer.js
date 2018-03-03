import React, { Component } from 'react'

import NewItem from '../components/NewItem'
import Actions from '../actions'
import Store from '../store'

export default class NewItemContainer extends Component {
  state = {
    newItemValue: Store.getState().newItemValue
  }

  updateState = () => {
    this.setState({
      newItemValue: Store.getState().newItemValue
    })
  }

  componentDidMount () {
    this.unsubscribe = Store.subscribe(this.updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  shouldComponentUpdate (newProps, newState) {
    return this.state.newItemValue !== newState.newItemValue
  }

  handleChange = event => {
    const value = event.target.value
    Actions.items.updateNewItemValue(value)
    clearTimeout(this.finishTyping)
    this.finishTyping = setTimeout(() => {
      this.onFinishTyping(value)
    }, 500)
  }

  onFinishTyping = value => {
    console.log('finish typing')
  }

  handleSubmit = event => {
    event.preventDefault()
    // add item
    Actions.items.addNewItem(this.state.newItemValue)
    // update input
    Actions.items.updateNewItemValue('')
  }

  render () {
    const { newItemValue } = this.state
    return <NewItem onSubmit={this.handleSubmit} newItemValue={newItemValue} onNewItemValueChange={this.handleChange} />
  }
}
