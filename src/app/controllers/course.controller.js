const Course = require('../models/Course');
const {mutipleMongooToObject, mongooToObject} = require('../../util/mongoose')
class CourseController {
 
    // get("/people", async (request, response) => {
    // try {
    //     var result = await Course.find().exec();
    //     response.send(result);
    // } catch (error) {
    //     response.status(500).send(error);
    // }
  // });
  get(req,res,next) {
    Course.find()
    .then(courses => {
      res.send(courses);
    // res.json(course);
  })
    .catch(next)
   
  }
    //get slug
    Show(req,res,next) {
      Course.findOne({ slug : req.params.slug})
      .then(courses => {
        res.render("courses/show",{
        courses: mongooToObject(courses)
      })
      // res.json(course);
    })
      .catch(next)
     
    }
    //Get/create 
    create(req,res,next) {
      res.render("courses/create");
    }

    //Post/courses/store
    store(req,res,next) {
      console.log(req.body);
    const course =  new Course(req.body);
    course.save()
    .then((courses)=>{
      res.send(courses);
    })
    .catch(next=>{res.status(500).send(next)})
      // const course = new Course(req.body)
      //   course.save()
      //     .then(()=>res.redirect('/new'))
      //     .catch(error => {
            
      //     } )
    }
  //   populate(req,res,next) {
  //     Course.find().populate('categories')
  //   .then(courses => {
  //     res.send(courses);
  //   // res.json(course);
  // })
  //   .catch(next)
  //   }



  getCourse(req,res) {
    Course.find().populate("category_id").then(data => res.send(data)).catch((error)=>res.status(500).json({error}))
  }
}
module.exports = new CourseController