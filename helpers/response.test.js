const target = require('./response');

// mock res for express
const setUpExpressMocks = () => {
  let res;
  let resSet;
  const resStatus = jest.fn();
  const resJson = jest.fn();
  resSet = jest.fn();
  res = {
    set: resSet,
    status: resStatus,
    json: resJson,
  };
  resJson.mockImplementation(() => res);
  resStatus.mockImplementation(() => res);
  resSet.mockImplementation(() => res);
  return res;
};
exports.setUpExpressMocks = setUpExpressMocks;

describe('Helpers > Response', () => {
  it('Should send response with status() and json()', async () => {
    const res = setUpExpressMocks();
    const data = [];
    target.sendResponse(res, data);

    // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ response: data });
  });

  it('Should send error with status() and json()', async () => {
    const res = setUpExpressMocks();
    const data = 'message';
    target.sendError(res, data);

    // expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: data });
  });
});
