const Course = require('../models/Course');
const {mutipleMongooToObject, mongooToObject} = require('../../util/mongoose')
class NewController {
  index(req, res,next) {

    Course.find({})
      .then(courses => {
        res.json(courses);
      //   res.render("new",{
      //   courses: mutipleMongooToObject(courses)
      // })
      
    })
      .catch(error => next(error))

    // res.json({
    //   name:"test"
    // });
    //get/new
    // res.render('new');
  }
}
module.exports = new NewController