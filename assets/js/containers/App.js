/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from './../reducers/index'
import SourcesList from './SourcesList'

export default class App extends Component{
    
    componentDidMount(){
        
        let unsubscribe = store.subscribe(()=>this.forceUpdate());

    }
    render(){
       return (
           <Provider store={store}>
               <div id="root" className="row">
                   <div className="col s3 list">
                        <h1>Sources:</h1>
                        <SourcesList />
                   </div>
                   <div className="col s5 offset-s3">
                       {this.props.children}
                   </div>
                  
               </div>
           </Provider>
       )
    }
}
App.childContextTypes = {
    store: PropTypes.object
};
