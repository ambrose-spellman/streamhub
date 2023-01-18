const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PugPlugin = require('pug-plugin');

const mode = process.env.NODE_ENV || 'development'

const devMode = mode === 'development'

const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
  assets: './src/assets/'
}

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    open: true,
    hot: true,
  },
  // entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    clean: true,
    filename: 'index.js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  plugins: [
    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`
    })),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'index.html')
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    
  ],
  module: {
    rules:[
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      //uncomment this if will be using HTML, no PUG
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          // devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
          MiniCssExtractPlugin.loader, 
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")]
              }
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {//fonts
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {//images
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      },
    ]
  }
}