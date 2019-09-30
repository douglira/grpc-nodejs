const grpc = require('grpc')
const config = require('./config')
const client = require('./client')

const noteClient = new client.descriptor.NoteProto(
  `${config.server.host}:${config.server.port}`,
  grpc.credentials.createInsecure(),
)


noteClient.getNotes(null, (err, response) => {
  if (err) {
    console.log('Error getNotes', err)
    return;
  }

  console.log(response);
});
