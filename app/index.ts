import * as Glue from 'glue'

import Manifest from './manifest'

const composeOptions = {
    relativeTo: __dirname
}

const composer = Glue.compose.bind(Glue, Manifest.get('/'), composeOptions)

composer((err, server) => {
    if (err) throw err

    server.initialize((errInit) => {
        if (err) throw errInit

        server.start(() => {
            server.log(['server', 'info'], `Server started at ${server.info.uri}`)
        })
    })
})

export default composer