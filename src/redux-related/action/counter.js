import { INCREMENT_ASYNC, INCREMENT, DECREMENT } from '../constant/counter'

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC,
  }
}

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function decrement() {
  return {
    type: DECREMENT,
  }
}
