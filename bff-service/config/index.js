const path = require('path')

module.exports = {
  server: {
    port: 50051,
    host: '127.0.0.1'
  },
  proto: {
    paths: [
      path.resolve(__dirname, '..', '..', 'protos', 'note.proto')
    ]
  }
}