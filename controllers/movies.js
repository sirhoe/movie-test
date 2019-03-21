const moviesHelper = require('../helpers/movies.js');
const responseHelper = require('../helpers/response');

exports.filterMovie = (req, res) => {
  const filterOptions = {
    isDrm: true,
    minEpisodes: 1,
  };
  const filtered = moviesHelper.filter(req.body.payload, filterOptions);

  const fieldsOptions = ['image', 'slug', 'title'];
  const result = moviesHelper.summarize(filtered, fieldsOptions);

  return responseHelper.sendResponse(res, result);
};
