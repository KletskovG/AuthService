import { Express } from 'express';
import md5 from 'md5';
import { User } from '../../models/User';

export const register = (app: Express) => {
  app.post('/auth/register', (req, res) => {
    return
  });
}