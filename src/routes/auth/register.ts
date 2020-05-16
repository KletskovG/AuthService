import { Express } from 'express';
import md5 from 'md5';
import { User } from '../../models/User';
import IAuthData from 'src/Interfaces/IAuthData';
import { validateEmail } from '@utils/validateEmail';

export const register = (app: Express) => {
  app.post('/auth/register',  async (req, res) => {
    const request = req.body as IAuthData;
    const user = await User.findOne({ email: request.email });
    if (!!user) { // If email already in DB
      console.log('[ERROR]---REGISTER---: Email already in DB');
      res.status(409).send('Email already registred');
    }  else if (validateEmail(request.email) === false) { // If email is invalid
      console.log('[ERROR]---REQUEST---: Invalid email');
      res.status(400).send('Email is invalid');
    } else {
      const hash = md5(request.password);
      User.create({ email: request.email, password: hash })
        .then((createdUser) => {
          res.status(201).send(JSON.stringify(createdUser));
        })
        .catch(err => {
          console.log('[ERROR]---REGISTER---: While inserting user data into the DB');
          res.status(500).send(err);
        })
    }
  });
}