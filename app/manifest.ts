import * as Confidence from 'confidence'

import AppConfig from './configurations'

const criteria = {
    env: process.env.NODE_ENV
}

const manifest = {
    $meta: 'Main server manifest',
    server: {},
    connections: [AppConfig.get('/server')],
    registrations: [
        /*
        * Hapi: Static file and directory handlers for hapi.js
        * */
        //{ plugin: 'inert' },

        /*
        * Hapi: Templates rendering support for hapi.js
        * */
        //{ plugin: 'vision' },

        /*
        * Hapi: OpenAPI (aka Swagger) plug-in
        * */
        //{
        //    plugin: {
        //        register: 'hapi-swagger',
        //        options: AppConfig.get('/api')
        //    }
        //},

        /*
         * Hapi: display the routes table to console at startup
         * */
        { plugin: 'blipp' },

        /*
        * Hapi: logger
        * */
        {
            plugin: {
                register: 'good',
                options: AppConfig.get('/logging')
            }
        },

        /*
        * ApiHandlers: test
        * */
        {
            plugin: './api/test',
            options: AppConfig.get('/routesVersion')
        }
    ]
}

const store = new Confidence.Store(manifest)

export default {
    get: (key) => store.get(key, criteria),
    meta: (key) => store.meta(key, criteria)
}