import express, { Express as App} from 'express';
import {createServer} from 'node';
import { Server } from 'socket.io';
import {viewPath} from './paths.ts';
const app: App = express();

app.set('views', viewPath);
app.set('view engine', 'ejs');

app.use(express.static('../../static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


export default app;
