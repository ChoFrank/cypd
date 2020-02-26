var path = require("path");

module.exports = {
    entry: './index.jsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /.tsx?$/,
                loader: ['awesome-typescript-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 3000
    }
}