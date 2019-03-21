const _ = require('lodash');

exports.filter = (data, options) => {
  return _.filter(data, (item) => { 
    return item.drm === options.isDrm && item.episodeCount >= options.minEpisodes 
  });
};

exports.summarize = (data) => {
  return _.map(data, (item) => {
    return {
      image: item.image.showImage,
      slug: item.slug,
      title: item.title
    };
  });
};
