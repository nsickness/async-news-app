/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'

render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}