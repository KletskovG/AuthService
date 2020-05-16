import { Express } from 'express';
import { register } from './register';
import { signin } from './signin';
export default class AuthModule {
  constructor(app: Express) { 
    this.app = app;
    this.registerRoute();
    signin(app);
  }
  private app: Express = null;

  private registerRoute() {
    register(this.app);
  }
}