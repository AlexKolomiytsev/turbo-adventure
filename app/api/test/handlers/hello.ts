/**
 * Handler
 * */
const handler = (request, reply) => {
    console.log('test');
    reply({ message: `Hey Yo!!, ${request.params.test}!` })
};

const routeConfig = {
    method: 'GET',
    path: '/hello/{test}',
    config: {
        tags: ['api', 'heartbeat'],
        description: 'Just reply with greetings',
        handler
    }
};

export default (server, options) => server.route(routeConfig)