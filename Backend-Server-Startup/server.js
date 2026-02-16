// How to make and start the server using express?


// Make Server using Express
const express = require('express');

const app = express(); // Server create the instance

// For Start the server
app.listen(3000)

// Make some routes and send the response to the client
app.get('/', (req, res)=>{
//req is used to get the request from the frontend and res is used to send the response to the frontend
    res.send('Hello World')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.get("/product", (req, res)=>{
    res.send("Product Page")
})
app.get("/contact", (req, res)=>{
    res.send("Contact Page")
})

// now api staret the server using node server.js in the terminal and open the browser and type http://localhost:3000/ to see the response from the server. You can also type http://localhost:3000/about, http://localhost:3000/product, http://localhost:3000/contact to see the response from the server for different routes.
