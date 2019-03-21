const moviesHelper = require('../helpers/movies.js');
const responseHelper = require('../helpers/response');

exports.filterMovie = (req, res) => {
  const filterOptions = {
    isDrm: true,
    minEpisodes: 1,
  };
  const filtered = moviesHelper.filter(req.body.payload, filterOptions);

  const result = moviesHelper.summarize(filtered);

  return responseHelper.sendResponse(res, result);
};
