
import jwt from 'jsonwebtoken';
import { User } from '../../models/User';
import { Express } from 'express';
import AuthData from '../../Interfaces/AuthData';
import md5 from 'md5';
const jwtExpiresIn = 1440;

export const signin = (app: Express) => {
  app.post('/auth/signin', async (req ,res) => {
    const request: AuthData = req.body;
    const hash = md5(request.password);
    const user = await User.findOne({ email: request.email, password: hash, });
    if (!!user) { 
      const id = user.id
      const token = jwt.sign({ id }, process.env.JWT_TOKEN, { algorithm: 'HS256',  expiresIn: jwtExpiresIn});
      res.status(200).send(JSON.stringify({token}))
    } else { // If user isnt registred
      console.log('[ERROR]---SIGNIN---: Email not found');
      res.status(404).send('Email not found');
    }
  });
};
