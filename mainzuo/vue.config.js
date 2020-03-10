


module.exports ={
    publicPath:'',
    devServer:{
        host:'localhost',
        port:8080,
        open:true,
        inline:true,
        proxy:{
            "/gateway": {
                target:"https://m.maizuo.com",
                changeOrigin: true,
            },
            "/vue":{
                target:"http://localhost:1910",
                changeOrigin: true,
            }
        }
    }
}