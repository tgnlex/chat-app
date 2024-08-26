import api from './conf/setup.ts';

api.post('/api/messages', (req, res, next) => {
  let data = req.body.message;
  try {
    let result = await db.run('INSERT INTO messages (content) values (?)', data);
  } catch (e) {
    console.error(e);
    return;
  }
  res.status(200);
});

api.get('/api/messages',  async (req, res, next) => {
    const {data. error} = await db.run('SELECT id, content FROM messages');
    if (!error) {
      res.send(data);
    } else {
      console.error(error);
      return error;
    }
})
