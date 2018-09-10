import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'


const rootReducers = combineReducers({
    products: ProductReducer,
    orders: OrderReducer
})

export default rootReducers