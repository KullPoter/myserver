const Position = require('../model/position')
const errorHandler = require('../utils/errorHandler')
const Category = require('../model/categorry')
module.exports.getCategoryId = async function(req,res){
  console.log(req.params.id)
  
   try{
      let id = req.params.id
      const category = await Category.findById(id)
      console.log(category)
   const positions =await Position.find({
   category: req.params.id,
  
})
// res.status(200).json(positions)
res.render("specific.hbs", {
   name: positions,
   category: category
})
   }catch(err){
      errorHandler(res,err)
   }
}
module.exports.postPosition = async function(req,res){

   try{
      const position = await new Position({
         name: req.body.name,
         cost: req.body.cost,
         category: req.body.category, 

      }).save()
      res.status(201).json(position)
   }catch(err){
      errorHandler(res,err)
   }
}
module.exports.putPositionId = async function(req,res){
      try{
         const position = await Position.findOneAndUpdate(
            
            {_id: req.params.id}, 
            {$set: req.body},
            {new: true}
            )
         res.status(200).json(position)
    }catch(err){
       errorHandler(res,err)
    }
 }


 module.exports.delPositionId = async function(req,res){
   
   try{
      await Position.findByIdAndDelete({"_id": req.params.id})
      res.status(200).json({
         "message": "Position deleted"
      })
   }catch(err){
      errorHandler(res,err)
   }
 }

