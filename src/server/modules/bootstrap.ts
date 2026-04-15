import express, {type Express } from 'express';

type KV = { key: string, value: string | number | boolean | null }



interface AppConfig {
  middleware: Function[]
  plugins: Function[];
  globals: KV[];
  /** Sub modules **/
  database?: any;
  queue?: any;
  cache?: any;
  logger?: any;
}3

class Application {
  config: AppConfig | jt
  server: Express;
  cache: any; 
  tasks: any;
  log: any;
  db: any;
  
  private submodules(config: AppConfig | any) {
    if (config.database) this.db = config.database;
    if (config.logger) this.log = config.logger;
    if (config.queue) this.tasks = config.queue;
    if (config.cache) this.cache = config.cache;
  }
  constructor(config: AppConfig | object) {
    this.submodules(config);
    this.server = express();
    this.config = config;
  }
  bootstrap() {
    const { plugins, globals } = this.config;
    this.server.disable('x-powered-by');
    plugins.forEach((plug) => { this.server.use(plug) });
    globals.forEach((global) => { this.server.set(global.key, global.value)});
  }

  protocol() { return this.server.get('app.protocol') };
  loglevel() { return this.server.get('app.log')};
  version() { return this.server.get('app.version')};
  name() { return this.server.get('app.name')};
  host() { return this.server.get('app.host')};
  port() { return this.server.get('app.port')};
  env() { return this.server.get('app.env') };
  development() {return this.server.get('app.development') };
  production() { return this.server.get('app.production') };
}


export default Application;
