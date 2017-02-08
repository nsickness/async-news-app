/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Source from './../components/Source'

export default class SourcesList extends Component {
    render(){
        const store = this.context.store.getState().sources;

        if(!store.data) {
            return <div>Loading...</div>
        }

        let SourcesNav = store.data.sources.map(source =>{
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

SourcesList.contextTypes ={
    store: PropTypes.object
};