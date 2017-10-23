var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    context: __dirname + "/",
    entry: ["./src/js/test.js"],
    output: {
        path: path.join(__dirname, './src/build'),
        filename: "main.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
        }]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
};