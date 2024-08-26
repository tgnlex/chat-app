import {Server} from 'socket.io';
import httpServer from './app/app.ts';
import connection from './io/index.ts';


export const io = new Server(httpServer);

io.on('connection', connection)

function server() {
  console.info(`[*]: Server Listening on http://localhost:3000`);
  return httpServer.listen(3000);
}

export default server;
