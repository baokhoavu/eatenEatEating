var Recipe = require('../models/recipe')

function getRecipe(req, res) {
  Recipe.find(function(err, recipes) {
    if (err) console.log(err);
    console.log('Here ya go!')
  })
}

function insertRecipe(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err) {
      if (err) console.log(err);
      console.log('Added!');
  });
}

function removeRecipe(req, res) {
  var id = req.params.id;
  Recipe.remove({_id: id}, function(err) {
    if(err) console.log(err);
    console.log('Deleted!');
  })
}

module.exports = {
  getRecipe: getRecipe,
  insertRecipe: insertRecipe,
  removeRecipe: removeRecipe
}

