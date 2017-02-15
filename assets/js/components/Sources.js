/**
 * Created by Nikita on 2/15/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Source from './Source'

export default class Sources extends Component {
    render(){

        if(!this.props.sources) {
            return <div>Loading...</div>
        }

        let SourcesNav = this.props.sources.map(source =>{
            return (
                <Source key={source.name} href={source.id} title={source.name} image={source.urlsToLogos.large} description={source.description}/>
            )
        });

        return(
            <ul>
                {SourcesNav}
            </ul>
        )
    }
}

Sources.contextTypes ={
    store: PropTypes.object
};