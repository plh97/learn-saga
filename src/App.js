import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterAction from './redux-related/action/counter'
import * as userAction from './redux-related/action/user'
import { FETCH_PENDING, FETCH_RESOLVE, FETCH_REJECT } from './redux-related/constant/user'
import './App.css'
import _ from 'lodash'

const Loading = () => (
  <div className="loading">
    加载中...
  </div>
)
const ErrorHandleComponent = ({ data }) => (
  <div className="error">
    <div className="message">{data.message}</div>
    <div className="stack">{data.stack}</div>
  </div>
)


const Item = ({ data }) => (
  <div className="itme">
    <hr />
    <span className="item-name">name: {data.name}</span>
    <span className="item-name">username: {data.username}</span>
    <span className="item-name">email: {data.email}</span>
    <hr />
  </div>
)

const mapStateToProps = state => ({
  counter: state.counter,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(counterAction.increment, dispatch),
  decrement: bindActionCreators(counterAction.decrement, dispatch),
  fetchUser: bindActionCreators(userAction.fetchPending, dispatch),
})
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class App extends Component {
  constructor(props) {
    super(props)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleFetchUser = this.handleFetchUser.bind(this)
  }
  handleIncrement() {
    this.props.increment()
  }
  handleFetchUser() {
    this.props.fetchUser()
  }
  handleDecrement() {
    this.props.decrement()
  }
  render() {
    const { counter, user }  = this.props
    return (
      <div className="App" >
        <div className="counter">
          {counter}
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <div className="users">
          <button onClick={this.handleFetchUser}>Get Users</button>
          {user.httpStatus === FETCH_PENDING && <Loading />}
          {user.httpStatus === FETCH_RESOLVE && _.get(user, 'res.data', [])
            .map(item => <Item key={item.id} data={item} /> )}
          {user.httpStatus === FETCH_REJECT && <ErrorHandleComponent data={user.res} />}
        </div>
      </div>
    )
  }
}

export default App