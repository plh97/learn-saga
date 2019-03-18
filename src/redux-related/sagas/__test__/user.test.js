import { expectSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import { call } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import { throwError } from 'redux-saga-test-plan/providers'
import { FETCH_RESOLVE } from '../../constant/user'
import userReducer from '../../reducer/user'
import counterReducer from '../../reducer/counter'
import * as userActions from '../../action/user'
import { fetchUser } from '../user'

// 测试,通过对比输入输出的 action 是否与预期一致,进行判断
describe('user saga testing', () => {
  it('fetchUser Saga test with success request', () => {
    const mockReducers = combineReducers({
      user: userReducer,
      counter: counterReducer,
    })
    const initReducerData = {
      counter: 0,
      user: {
        status: FETCH_RESOLVE,
        res: [],
      },
    }
    const user = [{ id: 1, name: 'Leanne Graham' }, { id: 2, name: 'Ervin Howell' }]
    const mockReponse = {
      data: user,
    }
    return (
      expectSaga(fetchUser)
        // 输入点
        .dispatch(userActions.fetchPending())
        // =====saga执行一次=====
        // mock reducer
        .withReducer(mockReducers, initReducerData)
        // 为 http 请求提供 mock 数据,saga 函数在执行的时候,执行到 http 请求,自动 mock返回数据
        .provide([[call(axios.get, 'https://jsonplaceholder.typicode.com/users'), mockReponse]])
        // 输出点
        .put(userActions.fetchResolve(user))
        .run()
    )
  })

  it('fetchUser Saga test with fail request', () => {
    const mockReducers = combineReducers({
      user: userReducer,
      counter: counterReducer,
    })
    const initReducerData = {
      counter: 0,
      user: {
        status: FETCH_RESOLVE,
        res: [],
      },
    }
    const error = new Error('error')

    return (
      expectSaga(fetchUser)
        // 输入点
        .dispatch(userActions.fetchPending())
        // =====saga执行一次=====
        // mock reducer
        .withReducer(mockReducers, initReducerData)
        // 为 http 请求提供 mock 数据,saga 函数在执行的时候,执行到 http 请求,自动 mock返回数据
        .provide([[call(axios.get, 'https://jsonplaceholder.typicode.com/users'), throwError(error)]])
        // 输出点
        .put(userActions.fetchReject(error))
        .run()
    )
  })
})
