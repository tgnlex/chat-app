import Application from './modules/bootstrap.ts';
import config from './config/index.ts';
import express from 'express';
import engine from './config/engine.ts';
import router from './routes/views.ts'
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = new Application(config);
app.bootstrap();
engine(app.server);

app.server.use(router);

const server = createServer(app.server);
const io = new Server(server);

io.on('connection', (socket) => {
  console.info('[CHAT]: A user connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  })
  socket.on('disconnect', () => { console.info('[CHAT]: A user disconnected')})

});




function listen() {
  return server.listen(app.port(), () => {
    console.info(`Server running at http://${app.host()}:${app.port()}`)
  })
}

export default listen;
