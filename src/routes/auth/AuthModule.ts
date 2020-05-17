import { Express } from 'express';
import { register } from './register';
import { signin } from './signin';
import { auth } from './auth';
export default class AuthModule {
  constructor(app: Express) { 
    this.app = app;
    this.registerRoute();
    signin(app);
    auth(app);
  }
  private app: Express = null;

  private registerRoute() {
    register(this.app);
  }
}