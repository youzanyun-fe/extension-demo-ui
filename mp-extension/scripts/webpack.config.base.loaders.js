const path = require('path');

const fileLoader = name => ({
  loader: 'file-loader',
  options: {
    publicPath: '',
    context: path.resolve(__dirname, '../src'),
    name
  }
});

module.exports = [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, '../src'),
    exclude: path.resolve(__dirname, '../node_modules'),
    use: [
      // 'eslint-loader',
      'cache-loader',
      'babel-loader',
    ],
  },
  {
    test: /.wxml/,
    use: [
      fileLoader('[path][name].[ext]'),
      'mini-program-webpack-loader',
    ]
  },
  {
    test: /\.wxss$/,
    use: [
      fileLoader('[path][name].[ext]'),
      {
        loader: 'postcss-loader',
        options: {
          plugins: loader => [
            require('cssnano')()
          ]
        }
      },
      'mini-program-webpack-loader',
    ]
  },
  {
    test: /\.scss$/,
    use: [
      fileLoader('[path][name].wxss'),
      {
        loader: 'postcss-loader',
        options: {
          plugins: loader => [
            require('cssnano')(),
            require('autoprefixer')()
          ],
        }
      },
      'sass-loader'
    ]
  },
  {
    test: /.wxs$/,
    use: [
      fileLoader('[path][name].[ext]'),
      'babel-loader',
      'mini-program-webpack-loader',
    ]
  },
  {
    test: /\.json/,
    type: 'javascript/auto',
    use: [
      fileLoader('[path][name].[ext]'),
      'mini-program-webpack-loader'
    ]
  },
  {
    test: /\.(png|jpg|gif)$/,
    include: /src/,
    use: fileLoader('[path][name].[ext]')
  }
];
