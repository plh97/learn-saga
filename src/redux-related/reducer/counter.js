import { INCREMENT, DECREMENT } from '../constant/counter'

export default (state = 0, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return state + actions.payment
    case DECREMENT:
      return state - actions.payment
    default:
      return state
  }
}