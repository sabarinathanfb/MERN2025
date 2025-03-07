const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send(`<html>
            <body>
                <h1> Home Page 1</h1>
            </body>
            </html>`
        );
})

app.get('/contact',(req,res)=>{
    res.send(`<html>
            <body>
                <h1> Contact Page</h1>
            </body>
            </html>`
        );
})

app.get('*',(req,res)=>{
    res.send(`<html>
            <body>
                <h1>Page Not Found</h1>
            </body>
            </html>`
        );
})

app.listen(5005,()=>{

    console.log("server is running on 5005");
})

