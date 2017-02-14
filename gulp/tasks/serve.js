/**
 * Created by Nikita on 2/14/17.
 */

'use strict';

var gulp = require('gulp');
var url = require('url');
var path = require('path');
var options = require('../config');
var browserSync = require('browser-sync').create();

const DEFAULT_FILE = 'index.html';
var assetExtensions = [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
]
const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${assetExtensions.join('|')})\\b(?!\\.)`, 'i');

gulp.task('serve', function() {

    browserSync.init( {
        logPrefix: 'Live reload: ',
        server: {
            baseDir: './',
            middleware: function(req, res, next) {
                const fileHref = url.parse(req.url).href;

                if ( !ASSET_EXTENSION_REGEX.test(fileHref)) {
                    req.url = '/' + DEFAULT_FILE;
                }

                return next();
            }
        },
        notify:false

    } );

});


