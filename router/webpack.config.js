const path = require('path');

module.exports = {
    entry:[
       './router/index.js'
    ],
    // entry:'./router/index.js'
    output:{
       path:path.resolve(__dirname,'dist'),
       filename:'[name].js' 
    },
    module:{
        rules: [
           {
               test:/\.js$/,
               exclude:/node_modules/,
               use: {
                   loader: "babel-loader"
               }
           } 
        ]
    },
   
}