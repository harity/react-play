var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./page/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-1'],
          plugins: ['react-html-attrs',"transform-decorators-legacy"], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

