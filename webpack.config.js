const webpack = require('webpack');
var queryObject = {presets: [require.resolve('babel-preset-es2015'), require.resolve('babel-preset-react')]};
var query = require('querystring').stringify(queryObject);

var minimize = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})

module.exports = {
  plugins: [minimize],
  entry: {
    main: './index.web.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel?' + query]
//         query: {
//           presets: ['es2015', 'react'],
//         },
      },
    ],
  },
  resolve: {
    alias: {
      //'react-native': 'react-native-web',
//       'react-native' : './react-native-web-stub.js',
//       'react' : './react-stub.js',
//       'react-dom' : './react-dom-stub.js'
    },
  },
  externals: {
      // Use external version of React
      "react-native": "ReactNative",
      "react": "React",
      "react-dom": "ReactDOM"
  },
};
