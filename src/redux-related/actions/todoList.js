import { ALL_TODO, NOT_DONE_TODO, HAS_DONE_TODO, TOGGLE_TODO, ADD_TODO } from '../constant/todoList'

export const toggleTodo = state => {
  return {
    type: TOGGLE_TODO,
    payment: state,
  }
}

export const addTodo = state => {
  return {
    type: ADD_TODO,
    payment: state,
  }
}

export const allTodo = () => {
  return {
    type: ALL_TODO,
  }
}

export const notDoneTodo = () => {
  return {
    type: NOT_DONE_TODO,
  }
}

export const hasDoneTodo = () => {
  return {
    type: HAS_DONE_TODO,
  }
}