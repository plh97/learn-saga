import counterReducers from '../counter'
import * as counterActions from '../../action/counter'

// default values for initial state
const initialState = 0

describe('counter reducers testing', () => {
  it('should return the initial state', () => {
    expect(counterReducers(undefined, {})).toEqual(initialState)
  })

  it('it should be -1 with decrement action', () => {
    const action = counterActions.decrement()
    const state = counterReducers(initialState, action)
    expect(state).toEqual(initialState - 1)
  })

  it('it should be 1 with increment action', () => {
    const action = counterActions.increment()
    const state = counterReducers(initialState, action)
    expect(state).toEqual(initialState + 1)
  })

})
