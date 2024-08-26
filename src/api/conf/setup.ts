import express, { Express as App} from 'express';
import { Server } from 'socket.io';

const app: App = express();

api.use(express.json());

export default api;
