import { combineReducers } from 'redux'
import SearchReducer from './Search'
import { connectRouter } from 'connected-react-router';
import history from '../history'

export default combineReducers({
    router: connectRouter(history),
    search: SearchReducer,
})

