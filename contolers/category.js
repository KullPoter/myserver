const Category = require('../model/categorry')
const errorHandler = require('../utils/errorHandler')
const Position = require('../model/position')
module.exports.getComplex = async function(req,res){
    try{
        
   const categories = await Category.find({})
    res.status(200).json(categories)
    
    }catch(e){
        errorHandler(res,e)
    }
}  
module.exports.getComplexid = async function(req,res){
    try{
        const id = req.params.id;
        const category = await Category.findById(id)
        if(category){
             res.status(200).render('specific.hbs', {
                data: category
             })
        }else{
            res.send("no")
        }
       
         }catch(e){
             errorHandler(res,e)
         }  
}
module.exports.delComplexid = async function(req,res){
    console.log(req.body)
    try{
        await Category.findByIdAndDelete({_id: req.body.id})
        // await Position.remove({category: req.params.id})
        res.status(200).json({
            message: "Категория удалена"
        })
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.postComplex = async function(req,res){
    const categoryN = await Category.findOne({"name": req.body.name})
    if(categoryN){
        res.status(404).json({
            "message": "такая категоря существует"
        })
    }else{
        const category = new Category({
         name: req.body.name
           
           
        })
        try{
            await category.save()
            res.status(201).json(category)
        }
        catch(e){
    errorHandler(res,e)
        }
    }
    }
     
    
    
   



module.exports.change = async function(req,res){
    const updated = {
        
        name: req.body.name
    }
    try{
        const category = await Category.findByIdAndUpdate(
            {_id: req.body.id},
            {$set: updated},
            {new: true}
        )
            res.status(200).json(category)
    }catch(e){
        errorHandler(res,e)
    }
}