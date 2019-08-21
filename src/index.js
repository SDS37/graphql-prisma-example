import "@babel/polyfill/noConflict";

import server from './server'

server.start(
  {
    // heroku process.env.PORT
    port: process.env.PORT || 4000
  },
  () => console.log('Server is up')
)