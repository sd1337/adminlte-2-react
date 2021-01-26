const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

// if(!devMode){
//   console.log('Production build started!');
// }else{
//   console.log('Building UNoptimized development build!');  
// }

module.exports = {
  mode: devMode ? 'development' : 'production',
  // mode: 'production',
  entry: ['@babel/polyfill', './src/components/AdminLTE.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'adminlte-2-react',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /(node_modules|bower_components|build)/,
      use: {
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
      },
    },
    {
      test: /\.scss$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS, using Node Sass by default
      ],
    },
    {
      test: /\.css$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            sourceMap: true,
            convertToAbsoluteUrls: false,
          },
        },
        'resolve-url-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
            // eslint-disable-next-line global-require
              require('postcss-flexbugs-fixes'),
              // eslint-disable-next-line global-require
              require('autoprefixer')({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
    },
    // {
    //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       name: 'static/fonts/[name].[hash:8].[ext]',
    //       // outputPath: 'static/fonts/',
    //       publicPath: './',
    //     },
    //   }],
    // },
    {
      exclude: [/\.(js|jsx|mjs)$/,
         /\.html$/,
        /\.json$/,
        /\.css$/,
        // /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        /\.scss$/],
      loader: require.resolve('url-loader'),

      options: {
        limit: 8192,
        name: 'static/media/[name].[hash:8].[ext]',
        publicPath: '/',
      },
    },
    ],
  },
  externals: {
    react: 'commonjs react',
    '@fortawesome/fontawesome-svg-core': '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
    '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-regular-svg-icons': '@fortawesome/free-regular-svg-icons',
    '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    // 'datatables.net': 'datatables.net',
    fullcalendar: 'fullcalendar',
    // icheck: 'icheck',
    // jquery: 'jQuery',
    // 'jquery-sparkline': 'jquery-sparkline',
    moment: 'moment',
    // 'react-bootstrap': 'react-bootstrap',
    // 'react-dates': 'react-dates',
    'react-dom': 'react-dom',
    'react-ionicons': 'react-ionicons',
    'source-sans-pro/source-sans-pro.css': 'source-sans-pro/source-sans-pro.css',
    // select2: 'select2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css',
    // }),
  ],
};
