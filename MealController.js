const MealModel = require ('./MealModel');

module.exports.getMeal = async (req,res)=>{
    const myMeal = await MealModel.find();
    res.send(myMeal);
};

module.exports.saveMeals = async (req,res)=>{
    const { name } = req.body;
    MealModel.create({ name })
    .then ((data)=> {console.log('Meal added')
    res.send (data)})
}

module.exports.deleteMeal = async (req,res)=>{
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(()=>res.send('DeletedMeal'))
}

module.exports.editMeal = async (req,res)=>{
    const { _id, name} = req.body;
    MealModel.findByIdAndUpdate(_id, {name})
    .then(()=>res.send('Edited a meal'))
}