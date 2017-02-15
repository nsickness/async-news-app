/**
 * Created by Nikita on 2/15/17.
 */

'use strict';

import React from 'react'
import SourcesList from './../containers/SourcesList'

export default function Root(props) {
    return (
        <div id="root" className="row">
            <div className="col s3 list">
                <h1>Sources:</h1>
                <SourcesList />
            </div>
            <div className="col s5 offset-s3">
                {props.children}
            </div>
        </div>
    )
}