const Order = require('../model/order')
const Position = require('../model/position')
const errorHandler = require('../utils/errorHandler')
module.exports.getOrder = async function(req,res){
    // const query = {
    //     user: req.user.id
    // }
    // if(req.query.start){
    //     query.date = {
    //         $gte:   req.query.start
    //     }
    // }if(req.query.end){ 
    //     if(!query.date){
    //         query.date = {}
    //     }

    //     query.date['$lte'] = req.query.end 
    // }
    // if(req.query.order){
    //     query.order = + req.query.order 
    // }

    try{
        const order = await Order.find({})
        res.status(200).json(order)
    }catch(e){
        errorHandler(res,e)
    }
    }
module.exports.postOrder =  async function(req,res){
    console.log(req.body)
    try{
//         const lastOrder = await Order.findOne({user: req.user.id}).sort({
//             date: -1
//         })
// const maxOrder = lastOrder ? lastOrder.order: 0 


        const order = await new Order(req.body).save()
        
        res.status(201).json(order)
            }
            catch(e){
                errorHandler(res,e)
            }
}
module.exports.getOrderPositionId = async function(req,res){
try{
    const position = await Position.find({"category": req.params.id})
    res.status(200).render('orderPos.hbs', {
        position: position
    })
}catch(e){
    errorHandler(res,e)
}
}