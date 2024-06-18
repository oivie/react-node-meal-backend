const MealModel = require('./MealModel');


// GET
module.exports.getMeal = async(req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal);
}


// POST
module.exports.saveMeals = async (req, res, next) => {
    try {
        const { title } = req.body;
        const data = await MealModel.create({ title });
        console.log('Meal added');
        res.send(data);
    } catch (error) {
        next(error); // This passes the error to Express error handling middleware.
    }
};


// DELETE
module.exports.deleteMeal = async(req, res) => {
    const {_id} = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Delete a meal'))
}


// EDIT
module.exports.editMeal = async(req,res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a meal'))
}

