import 'babel-regenerator-runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './Components/App/App.Container'
import { Provider} from 'react-redux'
import RootReducer from './Reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchSaga from './Sagas/Search'
import randomSaga from './Sagas/Random'
import createSagaMiddleware from 'redux-saga'
import { Route, Router } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { ConnectedRouter } from 'connected-react-router'
import  history  from './history'
import SearchPage from './Components/Pages/Search/Search.container'
import Trending from './Components/Pages/Trending/TrendingPage.container'
import Random from './Components/Pages/Random/Random.container'

const saga = createSagaMiddleware();
 
const store = createStore(RootReducer,
    composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        logger, 
        saga)))

saga.run(searchSaga);
saga.run(randomSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path = '/' component = {SearchPage} />
                <Route exact path = '/TrendingPage' component = {Trending} />
                <Route exact path = '/RandomPage' component = {Random} />
            </App>
        </ConnectedRouter>

    </Provider>,
    document.getElementById('app'));