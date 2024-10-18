import { Request, Response } from 'express';
import authService from '../services/authService';

class AuthController {
  async register(req: Request, res: Response) {
    const { username, password, name, phone } = req.body;
    try {
      const user = await authService.register(username, password, name, phone);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const { user, token } = await authService.login(username, password);
      res.status(200).json({ user, token });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
