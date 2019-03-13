import { HAS_DONE_TODO, NOT_DONE_TODO, ALL_TODO } from '../constant/todoList'

const initState = [
  {
    id: Math.random(),
    done: false,
    value: 'redux',
  },
  {
    id: Math.random(),
    done: false,
    value: 'redux-saga',
  },
  {
    id: Math.random(),
    done: false,
    value: 'redux-reducer',
  },
]

export default (state = initState, actions) => {
  switch (actions.type) {
    case HAS_DONE_TODO:
      return state.filter(todo => todo.done === actions.done)
    case NOT_DONE_TODO:
      return state.filter(todo => todo.done === actions.done)
    case ALL_TODO:
      return state
    default:
      return state
  }
}