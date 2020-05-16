import { Express } from 'express';
import md5 from 'md5';

export const register = (app: Express) => {
  app.post('/auth/register', (req, res) => {
    const str = req.body.login;

    const hash = md5(str);
    res.send(hash);
  });
}