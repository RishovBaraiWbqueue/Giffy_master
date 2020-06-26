import { combineReducers } from 'redux'
import SearchReducer from './Search'
import GiffyReducer from './Giffy'
import RandomReducer from './Random'
import { connectRouter } from 'connected-react-router';
import history from '../history'

export default combineReducers({
    router: connectRouter(history),
    search: SearchReducer,
    giffy: GiffyReducer,
    random: RandomReducer 
})

