const express = require("express");
const http = require("http");
const { connectDatabase } = require("./dbconnection");
const cardRouter = require("./routers/routers");
const { Server} = require("socket.io");
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server({cors: {origin: "http://127.0.0.1:5503" }});

connectDatabase()
  .then(() => {
    app.use(express.static(__dirname + '/public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/api/tech', cardRouter);

    io.on('connection', (socket) => {
      console.log('a user connected');
      
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  
      setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
      }, 1000);
    });

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);

    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  });