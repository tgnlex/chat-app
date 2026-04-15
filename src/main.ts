import app from './server/app.ts';

console.info(app.port());

function main() {
  console.log(`running main loop`);
  app.server.listen(app.port(), (err) => {
     if (err) console.error(err); 
     console.info(`server listening on http://${app.host()}:${app.port()}`);
  })
}


main();
