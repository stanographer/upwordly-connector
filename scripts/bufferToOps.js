const bufferToOps = (ops, doc) => {
  /*
  Takes an array of buffer array and translates
  them to ShareDB ones:
    32 = space
    8 = backspace
    13 = carriage return
    10 = linefeed
  */

  let deletes = 0;

  for (let i = 0; i < ops.length; i++) {
    let docEnd = doc.data.length;

    switch (ops[i]) {
      case 8:
        deletes += 1;
        console.log('backspace');
        break;
      case 32:
        doc.submitOp([docEnd, ' ']);
        console.log('space');
        break;
      case 13:
        doc.submitOp([docEnd, '\n']);
        console.log('carriage return');
        break;
      case 10:
        doc.submitOp([docEnd, '\n']);
        console.log('line feed');
        break;
      default:
        doc.submitOp([docEnd, String.fromCharCode(ops[i])]);
        console.log([docEnd, String.fromCharCode(ops[i])]);
        break;
    }
  }
  // Aggregate all the delete commands and wait until the end.
  if (deletes > 0) {
    if (doc.data.length > deletes) {
      doc.submitOp([doc.data.length - deletes, {d: deletes}]);
      deletes = 0;
    }
  }
};

module.exports = bufferToOps;
