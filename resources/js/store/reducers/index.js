import { combineReducers } from 'redux'
import testListReducer from './test'

const rootReducer = combineReducers({
    testListReducer: testListReducer
})

export default rootReducer