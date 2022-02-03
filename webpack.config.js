const path=require("path")

module.exports={
    entry: "./src/index.js",
    output:{
        path: path.join(__dirname,"build"),  //when creating new build file you have to npm run build:watch
        filename:"bundle.js",
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type:'asset/resource',
            },
            {
                test: /\.js$/,
                use:["babel-loader"],
                exclude: /node_modules/
            }
        ],
        
    },
}
