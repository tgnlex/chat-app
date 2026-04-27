import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index.html');
});

router.get('/chat', (req, res) => {
  res.render('pages/chat.html');
})


export default router;
