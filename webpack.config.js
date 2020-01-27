const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'cookieConsent',
        libraryTarget: 'umd',
    },
    plugins: [new webpack.ProgressPlugin()]
};