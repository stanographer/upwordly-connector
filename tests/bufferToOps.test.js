const bufferToOps = require('../scripts/bufferToOps');

const docFake = {
  data: 'All work and no play makes Stanley a dull boy.'
};

describe('Test deletion', () => {
  const singleDelOp = {
    type: 'Buffer',
    data: [8]
  };

  const multiDelOp = {
    type: 'Buffer',
    data: [8, 8, 8, 8, 8, 8, 8, 8]
  };

  test('Single deletion', () => {
    expect(bufferToOps(singleDelOp.data, docFake))
      .toEqual([45, { d: 1 }]);
  });

  test('Multiple deletions', () => {
    expect(bufferToOps(multiDelOp.data, docFake))
      .toEqual([38, { d: 8 }]);
  });
});

describe('Test write', () => {
  const simpleHello = {
    type: 'Buffer',
    data: [32, 72, 101, 108, 108, 111, 46] // <space>Hello.
  };

  const newSpeakerLine = {
    type: 'Buffer',
    data: [13, 10, 62, 62, 32]
  };

  test('Simple text', () => {
    expect(bufferToOps(simpleHello.data, docFake))
      .toEqual([46, ' Hello.']);
  });

  test('Text with linefeeds and new lines', () => {
    expect(bufferToOps(newSpeakerLine.data, docFake))
      .toEqual([46, '\r\n>> ']);
  });
});
