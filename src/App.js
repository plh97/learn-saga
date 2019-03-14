import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './redux-related/actions/counter'
import { toggleTodo, allTodo, notDoneTodo, hasDoneTodo } from './redux-related/actions/todoList'
import FilterTodoList from './views/container/FilterTodoList'
import InputTodoList from './views/container/InputTodoList'
import { ALL_TODO, HAS_DONE_TODO, NOT_DONE_TODO } from './redux-related/constant/todoList'
import './App.css'

function mapStateToProps( props, ownProps) {
  return {
    counter: props.counter,
    todoList: props.todoList,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment(1)),
    decrement: () => dispatch(decrement(1)),
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    allTodo: () => dispatch(allTodo()),
    notDoneTodo: () => dispatch(notDoneTodo()),
    hasDoneTodo: () => dispatch(hasDoneTodo()),
  }
}

const todoStyle = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '350px',
}

class App extends Component {
  render() {
    const { counter, increment, decrement, todoList, hasDoneTodo, notDoneTodo, allTodo } = this.props
    return (
      <div className="App">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        {counter}
        <br />
        <div style={todoStyle}>
          <InputTodoList />
          <div>
            <button className={todoList.filter === ALL_TODO ? 'active' : ''} onClick={allTodo}>all</button>
            <button className={todoList.filter === NOT_DONE_TODO ? 'active' : ''} onClick={notDoneTodo}>not done</button>
            <button className={todoList.filter === HAS_DONE_TODO ? 'active' : ''} onClick={hasDoneTodo}>has done</button>
          </div>
          <FilterTodoList />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)