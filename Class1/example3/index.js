const html = require('http');

const server = html.createServer((req,res) =>{

    if(req.url === '/'){
        res.write(`<html>
            <body>
                <h1> Home Page 1</h1>
            </body>
            </html>`
        );
    }
    if(req.url === '/contact'){
        res.write(`<html>
            <body>
                <h1> Contact Page </h1>
            </body>
            </html>`
        );
    }

    if(req.url === '/api/products'){
        const products =[{
            id:1,
            title: "Product1"
        },{
            id:2,
            title: "Product2"
        },{
            id:3,
            title: "Product3"
        }]

        res.setHeader('Content-Type','application/json');

        res.write(JSON.stringify(products));
    }
    
    res.end()
})

server.listen(5005,()=>{
    console.log('Server is running at http://localhost:5005');
})