import Application from './modules/bootstrap.ts'
import engine from './config/engine.ts';
import config from './config/index.ts';
import router from './routes/views.ts'
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = new Application(config)
app.bootstrap();
engine(app.server);
const server = createServer(app.server);
const io = new Server(server);

io.on('connection', (socket) => {
  console.info('[WS]: A user connected');
});

app.server.use(router);


export default app;
