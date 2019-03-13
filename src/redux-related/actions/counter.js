import { DECREMENT, INCREMENT } from '../constant/counter'

export const decrement = state => {
  return {
    type: DECREMENT,
    payment: state,
  }
}
export const increment = state => {
  return {
    type: INCREMENT,
    payment: state,
  }
}