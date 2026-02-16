import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { UserRouter } from './features/users/user.router';

const app = express();
app.use(express.json());

const apiRouter = Router();
app.use('/api', apiRouter);

const userRouter = new UserRouter();
apiRouter.use(userRouter.router);

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('Home');
});

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

//app.get('/users', (req, res) => {
//  return res.send('Users');
//});

//app.post('/', (req, res) => {
//  console.log(req.body);
//  res.send('hello!');
//});
