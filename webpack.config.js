const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon           = require('bourbon').includePaths;
const neat              = require('node-neat').includePaths;

var config = {
  context: __dirname + '/app',
	devtool: '#source-map',
  entry: {
    app: './entry.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [ bourbon, neat ]
            }
          }
        ],
        publicPath: '.'
      })
    },
    {
      test: /\.(jpg|gif|png|svg)$/,
      use: {
        loader: "file-loader",
        query: {
          name: "./images/[name].[ext]",
          publicPath: '.'
        }
      }
    },
		{
			test: /\.(html)$/,
			use: {
				loader: "file-loader",
				query: {
					name: "./[name].html",
				}
			}
		}]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]

};

module.exports = config;
