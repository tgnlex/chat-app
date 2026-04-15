import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index.html')
});

router.get('/blog', (req, res) => {
  res.render('blog.html')
});

export default router;
