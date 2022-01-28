const {resolve} = require("path");
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
module.exports = merge(commonConfig, {
    mode: "development",
    cache: false,
    module: {
        rules: [
        {
            test: /\.scss$/i,
            use: ["css-loader", "sass-loader"]
        },{
                test: /\.(png|jpg|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, "../dist"),
        compress: true,
        hot: true,
        port: 8080,
        historyApiFallback: {
            rewrites: [
                { from: /^\/.*$/, to: "/index.html" },
            ]
        }
    },
    devtool: "inline-source-map"
})