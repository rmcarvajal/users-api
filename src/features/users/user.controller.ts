import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { UserService } from './user.service';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUsers = (req: Request, res: Response) => {
    const users = this.userService.getUsers();
    return res.json(users);
  };

  createUser = (req: Request, res: Response) => {
    const { name, email, image } = req.body;
    if (name === undefined) {
      throw Boom.badRequest('name is required');
    }

    if (email === undefined) {
      throw Boom.badRequest('email is required');
    }

    const user = this.userService.createUser({
      name,
      email,
      image
    });

    return res.json(user);
  };

  deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    this.userService.deleteUser(String(id));
    return res.send('user deleted');
  };
}
