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
        let {image, title, href, description} = this.props;
        return(
            <div className="">
                <Link to={href}>
                    <div className="card">
                        <div className="card-image">
                            <img src={image} alt={title} onLoad={this.imageLoad} />
                        </div>
                        <div className="card-content">
                            <p>{description}</p>
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
}

Source.contextTypes = {
    store: PropTypes.object
}