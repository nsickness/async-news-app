/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import { createReducer } from 'redux-rest-api'
import { types, creators } from './actions'

const reducer = combineReducers({
    sources: createReducer(types.sources),
    news: createReducer(types.news)
});

const store = createStore(
    reducer,
    {},
    applyMiddleware(promiseMiddleware)
);

store.dispatch(creators.sources(store.dispatch))

export default store;