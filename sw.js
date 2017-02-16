/**
 * Created by Nikita on 2/15/17.
 */

'use strict';


console.info("SW startup");

var CACHE_NAME = 'news-app-cache';
var urlsToCache = [
    '/',
    '/index.html',
    '/public/css/style.min.css',
    '/public/css/style.css',
    '/public/js/main.min.js',
    '/public/js/main.js',
    '/public/fonts/roboto/Roboto-Regular.woff2',
    '/public/fonts/roboto/Roboto-Regular.woff',
    '/public/fonts/roboto/Roboto-Regular.ttf',
    '/async-news-app',
    '/async-news-app/index.html',
    '/async-news-app/public/css/style.min.css',
    '/async-news-app/public/css/style.css',
    '/async-news-app/public/js/main.min.js',
    '/async-news-app/public/js/main.js',
    '/async-news-app/public/fonts/roboto/Roboto-Regular.woff2',
    '/async-news-app/public/fonts/roboto/Roboto-Regular.woff',
    '/async-news-app/public/fonts/roboto/Roboto-Regular.ttf',
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
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

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});