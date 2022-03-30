const newRouter = require('./new.route');
const courseRouter = require('./course');
const categoryRouter = require('./category.route');
function route(app){
  app.use('/new',newRouter);
  app.use('/course',courseRouter);
  app.use('/category',categoryRouter);
}

module.exports = route;