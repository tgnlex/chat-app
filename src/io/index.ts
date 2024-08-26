import {cleanup} from './sockets/utils.ts';
import {handleChat} from './sockets/chat.ts';
import io from '../server.ts';


export const messages = []

function connection (socket){
  console.log('A user connected');
  socket.on('chat_message', handleChat)
  socket.on('disconnect', cleanup);
}



export default connection;
