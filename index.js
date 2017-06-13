module.exports = function(source, map) {
  this.cacheable();

  var query = this.query.substring(1);
  var config = JSON.parse(query);

  var prepend = config.prepend  || '';
  var append = config.append || '';

  source = prepend + '\n' + source + '\n' +  append;

  this.callback(null, source, map)
};
