//this is where my Node server code goes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//Port 
const port = 3001;

//Import toDoController so that I can implement them into my endpoints 
const todoCtrl = require('./controllers/todoController');

//Middleware
app.use(bodyParser.json());
app.use(cors());

//EndPoints
app.get('/api/getLists', todoCtrl.getList);
app.post('/api/newItem', todoCtrl.newItem);
app.put('/api/editItem/:id' , todoCtrl.editItem);
app.delete('/api/deleteItem/:id', todoCtrl.deleteItem);

app.get("/api/test", (req,res)=>{
    console.log("hello")

    res.status(200).send("Hekmfdlkmf world")


})


app.listen(port, () => console.log(`Listening on: ${ port }`));