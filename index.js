

const { Socket } = require('dgram');
const express=require('express');
const app=express();
const http=require('http').Server(app);
const path=require('path');
const io = require('socket.io')(http);
const ejsMate=require('ejs-mate');

app.engine('ejs', ejsMate);



//setting view engine as ejs
app.set('view engine','ejs');
//setting absolute path for views
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/chatzone',(req,res)=>{
    res.render('index.ejs')
})

io.on('connection',function(socket){
    socket.on('username',function(username){
        socket.username=username;
        io.emit('is_online', `🔵 ${socket.username} join the chat....`);
    });
    socket.on('disconnect', function(username) {
        io.emit('is_online',`🔴 ${socket.username} left the chat..`);
    });

    socket.on('chat_message', function(message) {
        io.emit('chat_message', `${socket.username}: ${message}`);
    });
    
})
const port=process.env.PORT || 8000;
const server=http.listen(port,()=>{
    console.log(`Listening on ${port}`);
})