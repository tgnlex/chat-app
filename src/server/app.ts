import Application from './modules/bootstrap.ts'
import engine from './config/engine.ts';
import config from './config/index.ts';
import router from './routes/views.ts'

const app = new Application(config);
app.bootstrap();
engine(app.server);


app.server.use(router);


export default app;
