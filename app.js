const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'settings.txt');
const shareConnection = require('./scripts/shareDbConnection');
const serialPort = require('./scripts/serialConnection');

function readSettingsAndStart() {
  let settings = {};

  fs.readFile(file, (err, data) => {
    if (err) throw new Error('Settings file could not be loaded.');
    data.toString()
      .split('\n')
      .filter(e => e.indexOf('=') > -1)
      .forEach(e => settings[e.split('=')[0]] = e.split('=')[1]);
    return start(settings);
  });
}

function start(settings) {
  const connection = shareConnection.connect(settings.SHARE_DB_HOST, settings.SHARE_DB_PORT);
  const doc = connection.get(settings.USERNAME, settings.JOB);

  doc.subscribe(err => {
    if (err) throw err;
    if (doc.type === null) console.error('This document could not be subscribed to.');
  });

  doc.on('load', () => {
    console.log('herrow' + doc.data);
    serialPort(doc, settings.COM_PORT);
  });
}

readSettingsAndStart();
