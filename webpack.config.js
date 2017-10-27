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
                presets: ['es2015', 'react', 'stage-0']
            },
            plugins: ['lodash']
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
        },{
            test: /\.jsx$/,
            include: [
                path.resolve(__dirname, "app/src"),
                path.resolve(__dirname, "app/test")
            ],      
            loader: "babel-loader"
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