/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Article from './../components/Article'

export default class Feed extends Component{
    componentDidUpdate(){
        document.title =  this.props.params.source
    }
    render(){
        const store = this.context.store.getState().news;
        if(!store.data) {
            return <div>Loading...</div>
        }
        let articles = store.data.articles.map((article, i) =>{
            return (
                <Article key={i} {...article} />
            )
        });
        return(
            <div>
                {articles}
            </div>
        )
    }
}

Feed.contextTypes ={
    store: PropTypes.object
};