const app = require('../../src/app');

describe('\'logic\' service', () => {
  it('registered the service', () => {
    const service = app.service('logic');
    expect(service).toBeTruthy();
  });
});
