import { Express } from 'express';
import md from 'md5';

export const register = (app: Express) => {
  app.post('/auth/regster', (req, res) => {
    const str = req.body.login;

    const hash = md
  });
}