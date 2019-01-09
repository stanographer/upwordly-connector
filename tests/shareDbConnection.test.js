const shareDbConnection = require('../scripts/shareDbConnection');

test('It returns a local connection object.', done => {
   expect(shareDbConnection.connect('', ''))
     .toBeDefined();
   done();
});

test('It returns a remote connection object.', done => {
  expect(shareDbConnection.connect('https://upword.ly', '80'))
    .toBeDefined();
  done();
});
