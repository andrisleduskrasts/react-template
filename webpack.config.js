const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'output.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
        inline: true,
        port: 8080
    },
    performance: {
        hints: false
    }
};
