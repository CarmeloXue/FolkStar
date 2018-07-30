const path = require('path');
const appPaths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';


module.exports = {
    devtool: 'eval',
    bail: true,
    mode: 'none',
    entry: [
        require.resolve('./polyfills.js'),
        appPaths.appIndexJs
    ],
    output: {
        path: appPaths.appOutput,
        filename: 'pcs/akpublic/static/js/[name].[hash:4].bundle.js',
        chunkFilename: 'pcs/akpublic/static/js/[name].[chunkhash:4].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
    },
    module: {
        rules: [
            { parser: { requireEnsure: false } },

            // {
            //  TODO Add Linting Tool
            // }

            {
                //each type pf file will meet one of specify loader,
                //otherwise will meet file-loader
                oneOf: [
                    //url-loader handle small files such as .png 
                    //treat as data URLs
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'pcs/akpublic/static/media/[name].[hash:4].[ext]',
                        }
                    },
                    //process our bussiness code in ./src
                    {
                        test: /\.js|jsx$/,
                        include: appPaths.appSrc,
                        exclude: [/[/\\\\]node_modules[/\\\\]/],
                        use: [
                            require.resolve('thread-loader'),
                            'cache-loader',
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['react-app'],
                                    plugins: [
                                        ['import', { 'libraryName': 'antd', 'style': true },],
                                        'react-hot-loader/babel'
                                    ],
                                    compact: true,
                                    highlightCode: true,
                                    cacheDirectory: true
                                }
                            }
                        ]
                    },
                    //process 3rd-party .js filr to standard es
                    {
                        test: /\.js$/,
                        use: [
                            require.resolve('thread-loader'),
                            'cache-loader',
                            {
                                loader: 'babel-loader',
                                options: {
                                    babelrc: false,
                                    compact: false,
                                    presets: [
                                        'react-app'
                                    ],
                                    cacheDirectory: true,
                                    highlightCode: true
                                }
                            }
                        ]
                    },
                    //process css and exclude module css
                    {
                        test: /\.css$/,
                        exclude: /\.module\.css$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    //todo
                                }
                            }
                        ]
                    },
                    // {
                    //     TODO module css
                    // }
                    // file-loader to load other type of files
                    {
                        loader: 'file-loader',
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: appPaths.appIndexHtml,
            filename: 'index.html',
            minify: {
                removeComments: true,
                minifyURLs: true,
                removeRedundantAttributes: true
            }
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': '/'
        }),
        new MiniCSSExtractPlugin({
            filename: 'pcs/akpublic/static/css/[name].[chunkhash:4].bundle.css',
            chunkFilename: 'pcs/akpublic/static/css/[name].[chunkhash:4].bundle.css'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            {
                from: './public',
                to: './pcs',
                toType: 'dir'
            }
        ], { ignore: ['akpublic', '*.css'] })
    ],
    devServer: {
        contentBase: appPaths.appOutput,
        compress: true,
        historyApiFallback: true,
        quiet: true,
        watchContentBase: true,
        watchOptions: {
            ignore: /node_modules/,
        },
        clientLogLevel: 'none',
        hot: true,
        publicPath: '/'
    },
    optimization: {
        
          splitChunks: {
            chunks: 'all',
            name: 'vendors',
          },
          runtimeChunk: true,
        },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000
    }
}
