import getHello from './handlers/hello'

exports.register = (server, options, next) => {
    getHello(server, options)

    return next()
}

exports.register.attributes = {
    name: 'test'
}