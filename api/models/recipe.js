var mongoose = require('mongoose');

var RecipeSchema = mongoose.Schema({
  name: String,
  img: String,
  calories: Number,
  fat: Number,
  carbs: Number,
  protein: Number,
  url: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);

