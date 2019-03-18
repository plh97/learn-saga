import React from 'react'
import Loading from '../Loading'
import renderer from 'react-test-renderer'

// LabelItem 组件 未选中 状态
describe('Loading snapshot rending test', () => {
  it('renders correctly testing', () => {
    const component = renderer
      .create(<Loading />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
