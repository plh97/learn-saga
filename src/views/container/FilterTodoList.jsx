import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-related/actions/todoList'
import { HAS_DONE_TODO, NOT_DONE_TODO } from '../../redux-related/constant/todoList'


class FilterTodoList extends Component {
  render() {
    const { todo, toggleTodo, filter } = this.props
    let filterTodo = todo
    if (filter === HAS_DONE_TODO) {
      filterTodo = todo.filter(item => item.done)
    } else if (filter === NOT_DONE_TODO) {
      filterTodo = todo.filter(item => !item.done)
    }
    return filterTodo.map(todo => <label style={{ display: 'block' }} key={todo.id}>
      <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)} />
      {todo.done ?
        <del>{todo.value}</del> :
        <span>{todo.value}</span>
      }
    </label>)
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterTodoList)