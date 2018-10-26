const express = require('express'); 
const bodyParser = require('body-parser'); 
const controller = require('./controller'); 
const massive = require('massive'); 
require('dotenv').config(); 

const app = express(); 
app.use(bodyParser.json()); 

//Database (SQL)
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database); 
}).catch(error => {
    console.log('MASSIVE error connecting to database', error); 
}); 

//Networking
app.post('/api/login', controller.createUser); 
app.post('/api/register', controller.createUser); 
app.post('/api/posts', controller.createPost); 

app.get('/api/posts/', controller.getUsersPosts); 
app.get('/api/posts/', controller.getAllPosts); 


//Listen
const PORT = 4000; 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🚀`); 
})