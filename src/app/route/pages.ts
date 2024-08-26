import express from 'express';
import {Request as Req, Response as Res, NextFunction as Next} from 'express';
import data from '../lib/pageData.ts';
const router = express.Router();

router.get('/', async(req: Req, res: Res, next: Next) => {
  res.render('index.ejs', data.index);
});
router.get("/chat", (req: Req, res: Res, next: Nest) => {
  res.render('chat.ejs', data.chat)
})
export {router};

