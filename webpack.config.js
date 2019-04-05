var path = require('path');
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
            { enforce : "pre", test : /\.js$/, loader : "source-map-loader"}
        ]
    },
    externals : {
        "react" : "React",
        "react-dom" : "ReactDOM"
    },
    mode : "development"
}
