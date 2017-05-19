const path = require('path');
const nodeExternals = require('webpack-node-externals')
   const loaders = [{
     test: /\.js$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel-loader',
     query: {
       presets: ['es2015', 'react'],
     },
}]
const client = {
    entry: './src/client.js',
    context: process.cwd(),
    output: {
    path: path.resolve(__dirname, './dist/public'),
        filename: 'bundle.js',
    },
     module: { loaders },
}
const server = {
    entry: './src/server.js',
    output: {
    path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
    },
    module: { loaders },
    target: 'node',
    externals: [nodeExternals()],
}
module.exports = [client, server]