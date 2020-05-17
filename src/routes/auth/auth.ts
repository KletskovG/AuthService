import { Express } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (app: Express) => {
  app.get('/auth/verify/:token', (req, res) => {
    try {
      const decoded = jwt.verify(req.params.token, process.env.JWT_TOKEN);
      res.status(200).send(decoded);
    } catch (error) {
      res.status(301).send('Invalid token');
    }
  })
}