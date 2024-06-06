module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000, // inline images smaller than 10KB
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'images/'
              }
            }
          ]
        }
      ]
    }
  };