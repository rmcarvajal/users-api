import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { User } from './user.types';

export class UserController {
  private users: User[];
  constructor() {
    this.users = [];
  }

  getUsers = (req: Request, res: Response) => {
    return res.json(this.users);
  };

  createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    if (name === undefined) {
      throw Boom.badRequest('name is required');
    }

    if (email === undefined) {
      throw Boom.badRequest('email is required');
    }

    const newUser: User = {
      id: new Date().getTime().toString(),
      name,
      email,
    };

    this.users.push(newUser);

    return res.json(newUser);
  };

  deleteUser = (req: Request, res: Response) => {
    return res.send('delete users');
  };
}
