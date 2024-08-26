import sqlite3 from 'sqlite3' 
import path from 'path';
import {open} from 'sqlite';
let __dirname = import.meta.dirname;

const db = new sqlite3.Database(path.resolve('./db/dev.db'))
  await db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_offset TEXT UNIQUE,
    content TEXT 
  )
`);

db.close();
