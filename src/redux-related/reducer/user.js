import { FETCH_PENDING, FETCH_REJECT, FETCH_RESOLVE } from '../constant/user'

const initialState = {
  httpStatus: FETCH_RESOLVE,
  res: {},
}

export default function (store = initialState, actions ) {
  switch (actions.type) {
    case FETCH_PENDING:
      return {
        httpStatus: FETCH_PENDING,
        res: {},
      }
    case FETCH_REJECT:
      return {
        httpStatus: FETCH_REJECT,
        res: actions.payload,
      }
    case FETCH_RESOLVE:
      return {
        httpStatus: FETCH_RESOLVE,
        res: actions.payload,
      }
    default:
      return store
  }
}