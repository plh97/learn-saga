import React from 'react'
import ErrorHandleComponent from '../ErrorHandleComponent'
import renderer from 'react-test-renderer'


// LabelItem 组件 未选中 状态
describe('Loading snapshot rending test', () => {
  it('renders correctly with default props', () => {
    const component = renderer
      .create(<ErrorHandleComponent />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with my setting props', () => {
    const data = {
      message: '加载中',
      stack: 'sdfsad',
    }
    const component = renderer
      .create(<ErrorHandleComponent data={data} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
