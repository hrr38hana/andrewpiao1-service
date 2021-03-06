module.exports = {
  entry: ['babel-polyfill', __dirname + '/client/src/App.jsx'],
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-react', '@babel/preset-env']
          // }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  }
};