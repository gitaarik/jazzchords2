process.noDeprecation = true

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy', 'transform-class-properties'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    entry: {
        'test/test.js': './src/test.js',
    },
    output: {
        path: 'build/',
        filename: '[name]'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
