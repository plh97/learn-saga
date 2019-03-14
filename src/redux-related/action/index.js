import { INCREMENT, DECREMENT } from '../constant'

export default {
  increment: state => ({
    type: INCREMENT,
    payment: state,
  }),
  decrement: state => ({
    type: DECREMENT,
    payment: state,
  }),
}