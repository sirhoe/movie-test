const target = require('./validators');
const responseHelper = require('../helpers/response');

jest.mock('../helpers/response');

describe('Helpers > Validators', () => {
  beforeEach(() => {
    // Resets the module registry - the cache of all required modules. 
    // This is useful to isolate modules where local state might conflict between tests. 
    jest.resetModules();
  });

  it('Should response to invalid JSON errpr', async () => {
    const err = new SyntaxError();
    let req;
    let next;
    let res;

    target.checkJSON(err, req, res, next);

    expect(responseHelper.sendError).toHaveBeenCalledWith(res, 'Could not decode request: JSON parsing failed');
  });
});
