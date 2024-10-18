import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    // Type check for JwtPayload
    if (typeof decoded === 'object' && (decoded as JwtPayload).id) {
      req.body.userId = (decoded as JwtPayload).id; // Access id safely
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  });
};

export default authenticate;
