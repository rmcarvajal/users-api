import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { UserRouter } from './features/users/user.router';
import cors from 'cors';
import { UserController } from './features/users/user.controller';
import { errorsMiddleware } from './middlewares/errorsMiddleware';
import { UserService } from './features/users/user.service';

const app = express();
app.use(express.json());
app.use(cors());

const apiRouter = Router();
app.use('/api', apiRouter);

const userService = new UserService();
const userController = new UserController(userService);

const userRouter = new UserRouter(userController);
apiRouter.use(userRouter.router);

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('Home');
});

app.use(errorsMiddleware);

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

export default app;
