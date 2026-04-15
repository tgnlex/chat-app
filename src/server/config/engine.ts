import nunjucks from 'nunjucks';
import type { Express } from 'express'

function engine(application: Express) {
  nunjucks.configure('src/views', {
    autoescape: true,
    express: application
  });
  return nunjucks;
};

export default engine;
