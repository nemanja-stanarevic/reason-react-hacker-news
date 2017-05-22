var moment = require('moment');

var API_BASE_URL = 'https://serverless-api.hackernewsmobile.com/';

var TOP_STORIES_URL = API_BASE_URL + 'topstories.json';

var storyUrl = function(id) {
  API_BASE_URL + 'stories/' + id + '.json';
};

module.exports = {
  fromNow: function(time) {
    return moment(time * 1000).fromNow();
  },
  dangerousHtml: function(html) {
    return {
      __html: html,
    };
  },
};