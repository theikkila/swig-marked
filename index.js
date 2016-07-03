
const marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  smartypants: true
});


module.exports = function (input) {
  return marked(input);
};

module.exports.safe = true;
