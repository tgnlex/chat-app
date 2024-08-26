import {io} from '../../server.ts';
import {messages} from '../index.ts';
export function handleChat(data: string) {
  messages.push(data);
  io.emit('chat_message', data)  
  console.log(data);
};
