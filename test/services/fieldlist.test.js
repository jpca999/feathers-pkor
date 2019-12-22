const app = require('../../src/app');

describe('\'fieldlist\' service', () => {
  it('registered the service', () => {
    const service = app.service('fieldlist');
    expect(service).toBeTruthy();
  });
});
