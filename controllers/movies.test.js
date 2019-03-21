const target = require('./movies');
const moviesHelper = require('../helpers/movies');
const responseHelper = require('../helpers/response');

jest.mock('../helpers/movies');
jest.mock('../helpers/response');

describe('Controller > Movies', () => {
  it('Should call filter() and summarize()', async () => {
    const req = { body: { payload: [] } };
    const res = jest.fn();
    target.filterMovie(req, res);

    expect(moviesHelper.filter).toHaveBeenCalledTimes(1);
    expect(moviesHelper.summarize).toHaveBeenCalledTimes(1);
    expect(responseHelper.sendResponse).toHaveBeenCalledTimes(1);
  });
});
