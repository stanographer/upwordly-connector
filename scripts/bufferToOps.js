const bufferToOps = ops => {
  /*
  Takes an array of binary data ops and translates
  them to ShareDB ones:
    32 = space
    8 = backspace
    13 = carriage return
    10 = linefeed
  */

  for (let i = 0; i < ops.length; i++) {
    let deletes = 0;
    let opToApply = [];

    switch (ops[i]) {
      case 8:
        opToApply.push([11, {d: deletes}]);
        console.log('backspace');
        break;
      case 32:
        opToApply.push([11, ' ']);
        console.log('space');
        break;
      case 13:
        opToApply.push([11, '\r']);
        console.log('carriage return');
        break;
      case 10:
        opToApply.push([11, '\n']);
        console.log('line feed');
        break;
      default:
        opToApply.push(ops[i].toString('utf8'));
        console.log(ops[i].toString('utf8'));
        break;
    }
  }
};

module.exports = bufferToOps;
