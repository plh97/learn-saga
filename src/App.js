import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import counterAction from './redux-related/action'
import './App.css'


const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(counterAction.increment, dispatch),
  decrement: bindActionCreators(counterAction.decrement, dispatch),
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
  }
  handleIncrement() {
    this.props.increment()
  }
  handleDecrement() {
    this.props.decrement()
  }
  render() {
    return (
      <div className="App" >
        {this.props.counter}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)