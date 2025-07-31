import CounterReducer from "./Reducer";
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const logger = store => next => action => {
    console.log('Dispatching', action)
    const result = next(action)
    console.log('Next State',store.getState())
    return result
}

const store = createStore(
    CounterReducer,
    composeWithDevTools(applyMiddleware(logger))
)

export default store