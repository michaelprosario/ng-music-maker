import express, { Request, Response } from 'express';
const router = express.Router()

router.post('/add', (req: Request, res: Response) => {
  let a: number = parseInt(req.body.a);
  let b: number = parseInt(req.body.b);
  let response = a+b;

  res.send('respnose = ' + response);
});

module.exports = router
