import * as Confidence from 'confidence';
import * as dotenv from 'dotenv';

dotenv.config();

const criteria = {
    env: process.env.NODE_ENV,
    apiVersion: process.env.API_VERSION
};

const config = {
    $meta: 'Main server config',
    server: {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    },
    api: {
        info: {
            title: 'hapijs test',
            description: 'description of the hapijs test',
        }
    },
    logging: {
        ops: {
            interval: 1000
        },
        reporters: {
            myConsoleReporter: [ {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [ { log: '*', response: '*' } ]
            }, {
                module: 'good-console'
            }, 'stdout' ]
        }
    },
    routesVersion: {
        routes: {
            prefix: {
                $filter: 'apiVersion',
                'v1': '/v1',
                'v2': '/v2',
                $default: '/v1'
            }
        }
    }
};

const store = new Confidence.Store(config);

export default {
    get: (key) => store.get(key, criteria),
    meta: (key) => store.meta(key, criteria)
}