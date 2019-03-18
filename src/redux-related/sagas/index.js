// import { INCREMENT, DECREMENT } from '../constant'
import { all } from 'redux-saga/effects'

import { fetchUser } from './user'

export default function* () {
  yield all([
    fetchUser(),
  ])
}