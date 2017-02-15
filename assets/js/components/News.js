/**
 * Created by Nikita on 2/15/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Article from './Article'

export default class News extends Component{
    componentDidUpdate(){
        document.title =  this.props.params.source
    }
    render(){

        if(!this.props.news) {
            return <div>Loading...</div>
        }
        let articles = this.props.news.articles.map((article, i) =>{
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

News.contextTypes ={
    store: PropTypes.object
};