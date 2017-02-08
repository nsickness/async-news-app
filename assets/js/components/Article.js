/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


export default class Source extends  Component {
    imageLoad(e){
        e.target.style.opacity = 1;
    }
    render(){
        let {urlToImage, title, url, description, author} = this.props;
        return(
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} onLoad={this.imageLoad} />
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <span className="right">{author}</span>
                    <a target="_blank" href={url}>Read full Article</a>
                </div>
            </div>
        )
    }
    
}

Source.contextTypes = {
    store: PropTypes.object
}
