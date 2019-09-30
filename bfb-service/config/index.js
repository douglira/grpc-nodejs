const path = require('path')

module.exports = {
  server: {
    port: 50051,
    host: '0.0.0.0'
  },
  proto: {
    paths: [
      path.resolve(__dirname, '..', '..', 'protos', 'note.proto')
    ]
  }
}