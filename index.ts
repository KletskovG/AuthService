import bodyParser from 'body-parser';
import express from 'express';
import db from './src/dbconnection';
import AuthModule from './src/routes/auth/AuthModule';
import {User} from './src/models/User';

const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

const auth = new AuthModule(app);
console.log(auth)

app.get('/', async (_, res) => {
  const users = await User.find({});
  const id = users[0].id;
  res.send(JSON.stringify(id));
})

db()
  .then(() => {
    app.listen(8085, () => {
      console.log('Server is running on ' + 8085);
      console.log('DB is connected');
    });
  })
  .catch(err => {
    console.log('An error occured while connecting to db ' + err);
  });

export default app;