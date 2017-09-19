module.exports = function(source, map) {
  this.cacheable();

  var prepend = this.query.prepend  || '';
  var append = this.query.append || '';

  source = prepend + '\n' + source + '\n' +  append;

  this.callback(null, source, map)
};
