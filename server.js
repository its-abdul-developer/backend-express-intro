// How to make and start the server using express?


// Make Server using Express
const express = require('express');

const app = express();

// Start the server
app.listen(3000)

// Make some routes and send the response to the client
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.get("/contact", (req, res)=>{
    res.send("Contact Page")
})

