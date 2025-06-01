import { Request, Response, NextFunction } from 'express';
import { LoginDetails, SignupDetails } from '../models/login';

// Login user
export const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    /**
     * Login here
     */
    res.status(200);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    /**
     * Logout here
     */
    res.status(200);
  } catch (error) {
    next(error);
  }
};

// Read single item
export const signup = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, email } = req.body;
    /**
     * Signup here
     */
    res.status(200);
  } catch (error) {
    next(error);
  }
};