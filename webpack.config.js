const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        'main': './src/js/main.js',
        'signUp': './src/js/signUp.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fresh Harvests',
            chunks: ['main'],
            template: 'src/html/main.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Fresh Harvests',
            chunks: ['signUp'],
            template: 'src/html/signUp.html',
            filename: 'signUp.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: path.resolve(__dirname, 'dist/images') },
            ],
        }),
    ],
}