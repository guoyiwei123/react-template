const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserJsPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let config = {
    target: "web",
    entry: "./src/index.js",
    cache: {
        type: "filesystem",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "cache-loader",
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose": false }]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }]
    },
    plugins: [
        new ESLintPlugin({
            overrideConfigFile: "./.eslintrc.js",
            extensions: "js",
            context: "./src",
            fix: true
        }), 
        new StylelintPlugin({
            configFile: "./.stylelintrc.js",
            context: "./styles",
            fix: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            title: "",
            filename: "./index.html",
            template: path.resolve(__dirname, "./public/index.html"),
            hash: true,
            cache: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./public/favicon.ico", to: "./"}
            ]
        })
    ],
    resolve: {
        alias: {
            "@images": path.resolve(__dirname, "./public/images"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@hocs": path.resolve(__dirname, "./src/hocs"),
            "@config": path.resolve(__dirname, "./src/config"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@commons": path.resolve(__dirname, "./commons"),
            "@styles": path.resolve(__dirname, "./styles")
        },
        extensions: [".js", ".jsx"]
    }
}
if(process.env.NODE_ENV == "development"){
    config.mode = "development";
    config.devtool = "inline-source-map";
    config.watchOptions = {
        ignored: '**/node_modules',
    }
    config.module.rules.push({
        test: /\.(png|jpg|svg)/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: "[name].[ext]"
                }
            }
        ]
    });
    config.devServer =  {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: {
            rewrites: [
                { from: /^\/.*$/, to: '/index.html' },
            ]
        }
    }
}else{
    config.mode = "production";
    config.module.rules.push({
        test: /\.(png|jpg|svg)/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    fallback: "file-loader",
                    name: "[name].[ext]",
                    outputPath: 'images',
                },
            },
        ],
    });
    config.plugins.unshift(new CleanWebpackPlugin());
    config.optimization =  {
        minimizer: [new TerserJsPlugin({
            parallel: true,
            extractComments: false,
            extractComments: 'all',
        })],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'commons',
                    chunks: 'all'
                }
            }
        },
    };
    // 打包压缩后文件超过2M时提示
    config.performance = {
        hints: "warning",
        maxEntrypointSize: 2000000,
        maxAssetSize: 800000
    };
    config.devtool = "hidden-source-map";
}

module.exports = config;