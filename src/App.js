import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './redux-related/actions/counter'
import { toggleTodo } from './redux-related/actions/todoList'
import './App.css'

function mapStateToProps( props, ownProps) {
  return {
    counter: props.counter,
    todoList: props.todoList,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment: num => dispatch(increment(num)),
    decrement: num => dispatch(decrement(num)),
    toggleTodo() {
      dispatch(toggleTodo())
    },
  }
}

class App extends Component {
  render() {
    const { counter, increment, decrement, todoList } = this.props
    return (
      <div className="App">
        <button onClick={increment(1)}>increment</button>
        <button onClick={decrement(2)}>decrement</button>
        {counter}
        <br />
        {todoList.map(todo => <div key={todo.id}>
          {todo.value}
          <input type="checkbox" checked={todo.done} onChange={this.toggleTodo} />
        </div>)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)