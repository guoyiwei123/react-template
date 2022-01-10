const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
module.exports = {
    entry: {
        main: resolve(__dirname, "../src/main.js")
    },
    output: {
        path: resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "happypack/loader"
            },{
                test: /\.(sc|c)ss$/,
                use: ["css-loader", "sass-loader"]
            }

        ]
    },
    plugins: [
        new ESLintPlugin({
            overrideConfigFile: resolve(__dirname, "./.eslintrc.js"),
            extensions: "js",
            context: resolve(__dirname, "../src"),
            threads: true,
            fix: true
        }), 
        new StylelintPlugin({
            configFile: resolve(__dirname, "./.stylelintrc.js"),
            extensions: "scss",
            context: resolve(__dirname, "../src"),
            fix: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: resolve(__dirname, "../src/assets/favicon.ico"), to: "./", noErrorOnMissing: true}
            ]
        }),
        new HappyPack({
            loaders: [
                {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": false }]
                        ]
                    }
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: "",
            filename: "./index.html",
            template: resolve(__dirname, "../src/index.html"),
            cache: true
        })
    ],
    resolve: {
        alias: {
            "@assets": resolve(__dirname, "../src/assets"),
            "@components": resolve(__dirname, "../src/components"),
            "@pages": resolve(__dirname, "../src/pages"),
            "@config": resolve(__dirname, "../src/config"),
            "@utils": resolve(__dirname, "../src/utils")
        },
        extensions: [".js", ".jsx"]
    }
}