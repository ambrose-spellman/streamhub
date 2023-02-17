const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist/'),
  },

  entry: {
    // The Pug file is the entry-point for all scripts and styles.
    // Source scripts and styles must be specified directly in Pug.
    // Do not need to define JS and SCSS in the webpack entry.

    index: './src/pug/pages/index.pug',      // output dist/index.html
    // 'page': './src/pug/pages/page.pug',
    // ...
  },

  plugins: [
    // enable processing of Pug files defined in webpack entry
    new PugPlugin({
      js: {
        // output filename of extracted JS file from source script defined in Pug
        // filename: 'assets/js/[name].[contenthash:8].js', //Uncomment Me if you need hash in js filename
        filename: 'assets/js/[name].js', //Uncomment Me if you don't need hash in js filename
      },
      css: {
        // output filename of extracted CSS file from source style defined in Pug
        // filename: 'assets/css/[name].[contenthash:8].css', //Uncomment Me if you need hash in css filename
        filename: 'assets/css/[name].css', //Uncomment Me if you don't need hash in css filename
      },
      pretty: false, // enable formatting of HTML
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
      },
      { // scss
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      { //images
        test: /\.(png|jpg|jpeg|svg|ico)/,
        type: 'asset/resource',
        generator: {
          // filename: 'assets/images/[name].[hash:8][ext]', //Uncomment Me if you need hash in images filename
          filename: 'assets/images/[name][ext]', //Uncomment Me if you don't need hash in images filename
        },
      },
      { //fonts
        test: /\.(woff2|woff|ttf|svg|eot)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      { //js - babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // ['@babel/preset-env', { targets: "defaults" }]
              ['@babel/preset-env', { targets: "> 0.25%, not dead" }]
            ],
          },
        },
      },
    ],
  },
};