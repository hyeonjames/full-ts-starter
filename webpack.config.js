var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : "./front/app.tsx",
    output : {
        filename : "bundle.js",
        path : __dirname + "/dist/public"
    },

    devtool : "source-map",

    resolve : {
        extensions : [".ts", ".tsx", ".js", ".json"]
    },

    module : {
        rules : [
            { 
                test : /\.tsx?$/,
                loader : "ts-loader",
                options : {
                    configFile : "front.tsconfig.json"
                }
            },
            { enforce : "pre", test : /\.js$/, loader : "source-map-loader"},
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    },
    externals : {
        "react" : "React",
        "react-dom" : "ReactDOM"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'front/index.html'),
            filename : path.join(__dirname, 'dist/public/index.html')
        })
    ],
    mode : "production"
}
