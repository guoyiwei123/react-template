const {merge} = require("webpack-merge");
const TerserJsPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        filename: 'js/[name].[contenthash].js',
        clean: true
    },
    cache: {
        type: "filesystem",
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },{
                test: /\.(png|jpg|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: "[name].[contenthash].[ext]",
                            outputPath: 'images'
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
    ],
    optimization: {
        minimizer: [
            new TerserJsPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin({
                parallel: true
            })
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    priority: 0,
                    minSize: 0,
                    minChunks: 2
                }
            }
        },
    },
    devtool: "hidden-source-map"
})