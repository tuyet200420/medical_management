const newRouter = require('./new.route');
const courseRouter = require('./course');
const categoryRouter = require('./category.route');
const vaccineRouter = require('./vaccine.route');
const storageRouter = require('./storage.route');
const patientRouter = require('./patient.route');
const vaccination_planRouter = require('./vaccination_plan.route');
const patient_vaccinationRouter =  require('./patient_vaccination.route');
function route(app){
  app.use('/new',newRouter);
  app.use('/course',courseRouter);
  app.use('/category',categoryRouter);
  app.use('/vaccine',vaccineRouter);
  app.use('/storage',storageRouter);
  app.use('/patient',patientRouter);
  app.use('/vaccination_plan',vaccination_planRouter);
  app.use('/patient_vaccination',patient_vaccinationRouter);
}

module.exports = route;