import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../../redux-related/actions/todoList'


class FilterTodoList extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      value: '',
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.value) return
    const value = event.target.querySelector('input').value
    this.props.addTodo(value)
    this.setState({ value: '' })
  }
  render() {
    const { value } = this.state
    return (
      <form  onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={value} />
      </form>
    )
  }
}


function mapStateToProps( props) {
  return {
    filter: props.todoList.filter,
    todo: props.todoList.todo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    addTodo: value => dispatch(addTodo(value)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterTodoList)