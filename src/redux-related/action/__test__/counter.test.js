import { increment, decrement } from '../counter'
import { DECREMENT, INCREMENT } from '../../constant/counter'

describe('counter action testing', () => {
  it('increment action', () => {
    const expectedAction = {
      type: INCREMENT,
    }
    expect(increment()).toEqual(expectedAction)
  })

  it('decrement action', () => {
    const expectedAction = {
      type: DECREMENT,
    }
    expect(decrement()).toEqual(expectedAction)
  })
})
