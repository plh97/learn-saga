
import { FETCH_PENDING, FETCH_RESOLVE, FETCH_REJECT } from '../constant/user'

export function fetchPending() {
  return {
    type: FETCH_PENDING,
  }
}

export function fetchResolve(res) {
  return {
    type: FETCH_RESOLVE,
    payload: res,
  }
}

export function fetchReject(res) {
  return {
    type: FETCH_REJECT,
    payload: res,
  }
}
