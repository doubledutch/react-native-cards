const path = require('path')
const webpack = require('webpack')
var queryObject = {presets: [require.resolve('babel-preset-es2015'), require.resolve('babel-preset-react')]};
var query = require('querystring').stringify(queryObject);

const DIST_DIRECTORY = './dist/'

module.exports = {
  entry: {
    'ddview': DIST_DIRECTORY + 'components/ddview',
    'dimensions': DIST_DIRECTORY + 'components/dimensions',
    'feed': DIST_DIRECTORY + 'components/feed',
    'nativemodules': DIST_DIRECTORY + 'components/nativemodules',
  },
  output: {
    filename: 'components/[name]/dd-[name].min.js',
    path: DIST_DIRECTORY,
    libraryTarget: "var",
    library: ["DD", "[name]"],
  },
  module: {
  },
  plugins: [
  ],
  externals: {
      // Use external version of React
      "react-native": "ReactNative",
      "react": "React",
      "dd-ddview": "DD.ddview",
      "dd-dimensions": "DD.dimensions",
      "dd-nativemodules": "DD.nativemodules",
      "dd-feed": "DD.feed",
      "react-dom": "ReactDOM"
  }
}
