const Todo = require('../model/todoModel')
exports.createTodo = async(req,res)=>{
    try {
        const todo = await Todo.create(req.body)
        res.status(201).send({Success:'true' , todo})
    } catch (error) {
        
    }
}
exports.getTodo = async(req,res)=>{
    try {
        const todo = await Todo.find()
        res.status(201).send({Success:'true' , todo})
    } catch (error) {
        
    }
}
exports.deleteTodo = async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(201).send({Success:'true' , todo})
    } catch (error) {
        
    }
}
exports.updateTodo = async(req ,res)=>{
    const product = await Todo.findByIdAndUpdate(req.params.id, req.body)
    await product.save()
    res.status(200).json({
        success:true
    })
}