const SerialConnection = require('serialport');
const bufferToOps = require('./bufferToOps');

serialPort = function(doc, COM_PORT) {
  const port = new SerialConnection(`\\\\.\\${COM_PORT}`, {
    autoOpen: false,
    baudRate: 9600,
    parity: 'even',
    dataBits: 8,
    bufferSize: 10,
    stopBits: 1
  });

  port.open(function(err) {
    if (err) return console.log('Error opening port: ', err.message);
  });

// The open event is always emitted
  port.on('open', function() {
    console.log('Port connected at: ' + COM_PORT + '\n\n' + 'You may begin writing now.');
  });

  port.on('data', data => {
    const op = data.toJSON();
    if (op.type !== 'Buffer') return new Error('Cannot read this type of stream.');
    console.log(op);
    bufferToOps(op.data, doc);
  });

  // Lists available COM ports available on the computer.
  // SerialConnection.list(function(err, ports) {
  //   ports.forEach(function(port) {
  //     console.log(port.comName);
  //   });
  // });
};

module.exports = serialPort;
