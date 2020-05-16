import mongoose from 'mongoose';

export default () =>
  new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    mongoose.connection
      .on('error', err => reject(err))
      .on('close', () => console.log('Database connection closed'))
      .once('open', () => resolve(mongoose.connections[0]));

    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
});