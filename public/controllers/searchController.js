(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('searchController', searchController)

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this
    // vm.allRecipes = [];

    vm.titleOne = "You Want Abs. These Will Help Ya"
    vm.titleTwo = "Big Muscles? Stuff It Up With These"

    vm.cut = cutRecipe
    vm.bulk = BulkRecipe

    vm.add = addRecipe

    // low fat and less calories
    function cutRecipe() {
      var url = process.env.REDIRECT_URL + '/cut'
      var searchDataOne = $('#searchOne').val()
      var inputDataOne = { searchDataOne: searchDataOne }
      $http
        .post(url, inputDataOne, (data) => {
        })
        .then(function(response){
          vm.recipes = response.data.hits
          console.log(vm.recipes)
          // vm.recipes.push(response)
        }, function(error) {
          console.log(error)
        })
      }

    // high protein more calories
    function BulkRecipe() {
      var url = process.env.REDIRECT_URL + '/bulk'
      var searchDataTwo = $('#searchTwo').val()
      var inputDataTwo = { searchDataTwo: searchDataTwo }
      console.log(inputDataTwo)
      $http
        .post(url, inputDataTwo, (data) => {
        })
        .then(function(response){
          vm.recipes = response.data.hits
          console.log(vm.recipes)
          // vm.recipes.push(response)
        }, function(error) {
          console.log(error)
        })
      }
    // adds whichever recipe to the database
    function addRecipe(recipes) {
      // console.log('added maybe. check!')
      // console.log(recipes)
      // console.log(allRecipes)
      let newRecipe = {
        name: recipes.recipe.label,
        img: recipes.recipe.image,
        calories: recipes.recipe.calories,
        fat: recipes.recipe.digest[0].daily,
        carbs: recipes.recipe.digest[1].daily,
        protein: recipes.recipe.digest[2].daily,
        url: recipes.recipe.url
      }
      // allRecipes.push(newRecipe)
      let url = '/api/recipes'
      $http
        .post(url, newRecipe, (data) => {
        })
        .then(function(res) {

        }, function(err) {
          console.log(err);
        })
      }


    // function deleteRecipe() {
    //   let url = '/api/recipes/' + recipes._id
    //   $http
    //     .post('/api/recipes/' + recipe._id)
    //     .then(function(res) {
    //       getRecipes();
    //     }, function(err) {
    //       console.log(err)
    //     });
    // }
  }
})();
