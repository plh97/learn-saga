import { put, takeLatest, call } from '@redux-saga/core/effects'
import {  fetchReject, fetchResolve } from '../action/user'
import axios from 'axios'
import { FETCH_PENDING } from '../constant/user'

export function* fetchUser() {
  yield takeLatest(FETCH_PENDING, function*() {
    try {
      const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
      yield put(fetchResolve(users))
    } catch (error) {
      yield put(fetchReject(error))
    }
  })
}