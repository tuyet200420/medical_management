const Category = require('../models/Category');
class CategoryController {
 
  get(req,res,next) {
    Category.find()
    .then(categories => {
      res.send(categories);
  })
    .catch((next) => {res.status(500).send(next)})
   
  }
   
  GetSlug(req,res,next) {
    Category.findById(req.params.id)
    .then(categories=>{
      res.send(categories);
    })
    .catch(next=>{res.status(500).send(next)});
  }

  post(req,res,next) {
    console.log(req.body);
    const category =  new Category(req.body);
    category.save()
    .then((categories)=>{
      res.send(categories);
    })
    .catch(next=>{res.status(500).send(next)})
  };

  put(req,res,next) {
    console.log(req.body);
    console.log(req.params.id);
    Category.updateOne({_id: req.params.id},req.body)
    .then(()=>{
      const data = req.body;
      data._id = req.params.id;
      res.send(
        data
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

  delete(req,res,next) {
    console.log(req.body);
    Category.deleteOne({_id: req.params.id})
    .then((category)=>{
      res.send(
        category
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

}
module.exports = new CategoryController