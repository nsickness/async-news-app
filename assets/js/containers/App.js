/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import { creators } from './../reducers/actions'
import store from './../reducers/index'
import NewsList from './NewsList'
import Root from './../components/Root'


export default class App extends Component{
    handleSourceChange(nextState){
        if(nextState.params.source !== location.pathname){
            store.dispatch(creators.news(store.dispatch, nextState.params.source))
        }
    }
    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Root}>
                        <Route path="/:source" component={NewsList} onEnter={this.handleSourceChange}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

