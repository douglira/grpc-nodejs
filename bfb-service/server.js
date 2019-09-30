const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const config = require('./config')

const noteService = require('./services/note')

class Server {
  constructor() {
    this.packageDefinition = protoLoader.loadSync(
      config.proto.paths,
      {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      },
    );

    this.descriptor = grpc.loadPackageDefinition(this.packageDefinition);
  }
  
  loadServices(server, { NoteProto }) {
    server.addService(NoteProto.service, {
      getNotes: noteService.getNotes
    })
  }
  
  bootstrap() {
    try {
      const { NoteProto } = this.descriptor;
    
      const server = new grpc.Server();
    
      this.loadServices(server, { NoteProto });
    
      server.bind(`${config.server.host}:${config.server.port}`, grpc.ServerCredentials.createInsecure());
      server.start();
      console.log(`Server running at ${config.server.port}`);
    } catch (err) {
      console.log('Bootstrap Error: ', err)
    }
  }
}

module.exports = new Server()

