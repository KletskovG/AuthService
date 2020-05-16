import bodyParser from 'body-parser';
import express from 'express';
import db from './src/dbconnection';
import AuthModule from './src/routes/auth/AuthModule';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world')
})

const auth = new AuthModule(app);

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