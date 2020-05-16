import mongoose from 'mongoose';
const { Schema } = mongoose;

export const schema = new Schema({
  email: String,
  password: String,
});

export const User = mongoose.model('user', schema);