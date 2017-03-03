var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var recipesController = require('../controllers/recipes');


router.route('/recipes')
  .get(recipesController.getRecipe)
  .post(recipesController.insertRecipe);

router.route('/recipes/:id')
  .delete(recipesController.removeRecipe);
//   .get(recipesController.getRecipe)
//   .put(recipesController.updateRecipe)


module.exports = router
