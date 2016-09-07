var webpack = require('webpack');

// webpack.config.js
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //We are excluding node_modules here because otherwise all external libraries will also go through Babel, slowing down compilation.
        loader: 'babel', // 'babel-loader' is also a legal name to reference 
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png"}
      },
    ]
  },
  resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee', '.css']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },
    }),
  ],
};