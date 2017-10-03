

(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('searchController', searchController)

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this

    // vm.titleOne = "You Want Abs. These Will Help Ya"
    // vm.titleTwo = "Big Muscles? Stuff It Up With These"

    vm.cut = cutRecipe
    vm.bulk = BulkRecipe

    vm.searched = []

    vm.add = addRecipe

    // low fat and less calories
    function cutRecipe() {
      var url = 'http://localhost:3000/edamam/cut'
      // var url = 'http://blooming-citadel-82186.herokuapp.com/edamam/cut'
      // var url = 'http://localhost:3000/edamam/cut' || 'http://blooming-citadel-82186.herokuapp.com/edamam/cut'
      var searchDataOne = $('#searchOne').val()
      var inputDataOne = { searchDataOne: searchDataOne }
      $http
        .post(url, inputDataOne, (data) => {
        })
        .then(function(response){
          vm.recipes = response.data.hits
          vm.searched = response.data.hits
          console.log(vm.recipes)
          console.log(vm.searched)
          // vm.recipes.push(response)
        }, function(error) {
          console.log(error)
        })
      }

    // high protein more calories
    function BulkRecipe() {
      var url = 'http://localhost:3000/edamam/bulk'
      // var url = 'http://blooming-citadel-82186.herokuapp.com/edamam/bulk'
      // var url = 'http://localhost:3000/edamam/bulk' || 'http://blooming-citadel-82186.herokuapp.com/edamam/bulk'
      var searchDataTwo = $('#searchTwo').val()
      var inputDataTwo = { searchDataTwo: searchDataTwo }
      $http
        .post(url, inputDataTwo, (data) => {
        })
        .then(function(response){
          vm.recipes = response.data.hits
          vm.searched = response.data.hits
          console.log(vm.recipes)
          console.log(vm.searched)
        }, function(error) {
          console.log(error)
        })
      }
    // adds recipe to the database
    function addRecipe(recipes) {
      let newRecipe = {
        name: recipes.recipe.label,
        img: recipes.recipe.image,
        calories: recipes.recipe.calories,
        fat: recipes.recipe.digest[0].daily,
        carbs: recipes.recipe.digest[1].daily,
        protein: recipes.recipe.digest[2].daily,
        url: recipes.recipe.url
      }
      let url = '/api/recipes'
      $http
        .post(url, newRecipe, (data) => {
        })
        .then(function(res) {
        }, function(err) {
          console.log(err);
      })
    }
  }
})();
