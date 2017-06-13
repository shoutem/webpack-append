# [Webpack](http://webpack.github.io/) loader to prepend/append text to files

Prepend/append text to the contents loaded by the loader. Useful to add headers, footers or to wrap all your files in the webpack pipeline.

## Install:

```bash
$ npm install --save-dev @shoutem/webpack-prepend-append
```

## Usage:

Add the loader to your `webpack.config.js`:

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        // ...
        {
          test: /\.js$/,
          loader: 'webpack-prepend-append',
          query: {
            prepend: 'Header text',
            append; 'Footer text'
          }
        }
      ]
    }
}
```

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        // ...
        {
          test: /\.js$/,
          loader: 'webpack-prepend-append',
          query: {
            prepend: 'WrapItIntoBlock {',
            append; '}'
          }
        }
      ]
    }
}
```

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
