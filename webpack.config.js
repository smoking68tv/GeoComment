const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: 'sourse-map',
  module:{
    rules:[
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'js/js'),
            use:{
                loader: 'babel-loader',
                options:{
                    presets: 'env'
                }
            }
            
        }
    ]
},
};