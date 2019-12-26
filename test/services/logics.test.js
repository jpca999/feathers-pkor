const app = require('../../src/app');

describe('\'logics\' service', () => {
  it('registered the service', () => {
    const service = app.service('logics');
    expect(service).toBeTruthy();
  });
});
