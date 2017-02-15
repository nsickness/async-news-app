/**
 * Created by Nikita on 2/15/17.
 */

'use strict';

importScripts('serviceworker-cache-polyfill.js');

console.info("SW startup");

var CACHE_NAME = 'news-app-cache';
var urlsToCache = [
    '/',
    '/public/css/style.css',
    '/public/js/main.js',
    '/public/fonts/roboto/Roboto-Regular.woff2',
    '/public/fonts/roboto/Roboto-Regular.woff',
    '/public/fonts/roboto/Roboto-Regular.ttf',
];


self.addEventListener('install', function(event) {

    console.info('installed');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});