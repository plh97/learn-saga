import { INCREMENT, DECREMENT } from '../constant/counter'

export default function (store = 0, actions ) {
  switch (actions.type) {
    case INCREMENT:
      return store + 1
    case DECREMENT:
      return store - 1
    default:
      return store
  }
}