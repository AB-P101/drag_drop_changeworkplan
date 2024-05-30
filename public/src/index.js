const http=require('http')
const fs= require('fs')
const port=3000

const indexPage = fs.readFileSync('index.html','utf-8')
fs.readFileSync('csslnw.css')
fs.readFileSync('jslnw.js')
fs.readFileSync('gantt_chart.js')


const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log('url = ',pathName)
    if(pathName==="/" || pathName==="/home"){
        res.end(indexPage)
    }
})
server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})