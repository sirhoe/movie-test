const responseHelper = require('./response');

// checks for invalid JSON
exports.checkJSON = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    responseHelper.sendError(res, 'Could not decode request: JSON parsing failed');
  } else {
    next()
  }
};
