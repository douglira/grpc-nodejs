const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const config = require('./config')

class Client {
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
}

module.exports = new Client()

