const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function resolvePath(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'www'),
        // path: '../www',
        filename: 'app.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolvePath('src'),
        }
    },
    devServer: {
        hot: true,
        open: true,
        compress: true,
        contentBase: '/www/',
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [
                    resolvePath('src'),
                    resolvePath('node_modules/framework7'),
                    resolvePath('node_modules/framework7-vue'),
                    resolvePath('node_modules/template7'),
                    resolvePath('node_modules/dom7'),
                    resolvePath('node_modules/ssr-window'),
                ],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify('development'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new CopyWebpackPlugin([{
            from: resolvePath('static'),
            to: resolvePath('www/static'),
        }]),
    ]
}
