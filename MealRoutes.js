const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');
const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal);
router.post('/editMeal', editMeal);

module.exports = router;
