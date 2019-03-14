import { createStore, applyMiddleware } from  'redux'
import reducer from '../reducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

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