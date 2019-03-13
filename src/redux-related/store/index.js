import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducer'

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