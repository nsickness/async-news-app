/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import Feed from './containers/Feed'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import store from './reducers/index'
import { creators } from './reducers/actions'

function handleSourceChange(prevState){
   if(prevState.params.source !== location.pathname){
       store.dispatch(creators.news(store.dispatch, prevState.params.source))
   }
}

render(

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={App} />
            <Route path="/:source" component={Feed} onEnter={handleSourceChange}/>
        </Route>
    </Router>,
    document.getElementById('app'));