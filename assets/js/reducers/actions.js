/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import { createActionTypes, createAction } from 'redux-rest-api'

export const types = {
    sources: createActionTypes('SOURCES'),
    news: createActionTypes('NEWS')
}

const API_URL = 'https://newsapi.org/v1';
const API_KEY = '5476179b3d5b4a6db7ee287ad7b1685b';

export const creators = {
    sources(dispatch) {

        return createAction({
            endpoint: `${API_URL}/sources?language=en`,
            types: types.sources,
            dispatch
        })
    },
    news(dispatch, source) {

        return createAction({
            endpoint: `${API_URL}/articles?source=${source}&apiKey=${API_KEY}`,
            types: types.news,
            dispatch
        })
    }
}