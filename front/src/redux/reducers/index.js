import { combineReducers } from 'redux'
import services from './services'
import products from './products'
import basket from './basket'

const rootReducer = combineReducers({services, products, basket})

export default rootReducer