import { Express } from 'express';
import { register } from './register';

export default class AuthModule {
  constructor(app: Express) { 
    this.app = app;
    this.registerRoute();
  }
  private app: Express = null;

  private registerRoute() {
    register(this.app);
  }
}