import { createStore, applyMiddleware } from  'redux'
import reducer from '../reducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createSagaMonitor } from  'redux-saga-devtools'
import createSagaMiddleware from 'redux-saga'
// import { is, asEffect } from 'redux-saga/utils'
import rootSaga from '../sagas'

// const monitor = createSagaMonitor()
// const monitor = window['__SAGA_MONITOR_EXTENSION__']

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor })
const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      sagaMiddleware,
    )
  )
)

sagaMiddleware.run(rootSaga)