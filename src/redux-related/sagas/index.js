// import { INCREMENT, DECREMENT } from '../constant'
import { all } from '@redux-saga/core/effects'

import { fetchUser } from './user'

export default function* () {
  yield all([
    fetchUser(),
  ])
}