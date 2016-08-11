import { createStore, applyMiddleware } from 'redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export default function configure(initialState) {
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
