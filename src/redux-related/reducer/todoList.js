import { HAS_DONE_TODO, NOT_DONE_TODO, ALL_TODO, TOGGLE_TODO, ADD_TODO } from '../constant/todoList'

const initState = {
  todo: [
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
  ],
  filter: ALL_TODO,
}

export default (state = initState, actions) => {
  switch (actions.type) {
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todo: state.todo.map(todo => {
          if (todo.id === actions.payment.id) {
            return Object.assign(todo, {
              done: !todo.done,
            })
          }
          return todo
        }),
      })
    case NOT_DONE_TODO:
      return Object.assign({}, state, {
        filter: NOT_DONE_TODO,
      })
    case HAS_DONE_TODO:
      return Object.assign({}, state, {
        filter: HAS_DONE_TODO,
      })
    case ALL_TODO:
      return Object.assign({}, state, {
        filter: ALL_TODO,
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todo: [{
          id: Math.random(),
          done: false,
          value: actions.payment,
        }, ...state.todo],
      })
    default:
      return state
  }
}