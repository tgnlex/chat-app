import {Request as Req, Response as Res, NextFunction as Next} from 'express';
import {createServer} from 'http';
import path from 'path';
import app from './conf/setup.ts';
import {router as pageRouter} from './route/pages.ts';

app.use(pageRouter);

app.get('/test', (req: Req, res: Res, next: Next) => {
  res.json({"api test": "success"});
});


const httpServer = createServer(app);
export default httpServer;

