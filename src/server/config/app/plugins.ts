import express from 'express';
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session';
import helmet from 'helmet';
/*** BODY PARSER **/
const BODY_PARSER = [   
  express.urlencoded({ extended: true}),
  express.json(),
  express.raw(),
  express.text()
]

const plugins = [
  express.static('src/static'),
  ...BODY_PARSER,
  cookieParser(),
//  cookieSession(),
  helmet()
]


export default plugins;
