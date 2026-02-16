import { Router } from 'express';

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.router.get('/users', (req, res) => {
      return res.send('get users');
    });
    this.router.post('/users', (req, res) => {
      return res.send('post users');
    });

    this.router.delete('/users/:id', (req, res) => {
      console.log(req.params);
      return res.send('delete users');
    });
  }
}
