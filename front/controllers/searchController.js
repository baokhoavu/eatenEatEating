(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('searchController', searchController)

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this
    vm.recipes = [];

    vm.title = 'The World Is Your Oyster'

    vm.cut = CutRecipe
    vm.bulk = BulkRecipe

    // function for getting the recipes for Abs
  function CutRecipe() {
    var query = 'lettuce'
    var app_key = process.env.EDAMAM_API_KEY;
    var app_id = process.env.EDAMAM_APP_ID;
    var url = `https://api.edamam.com/search?q=${query}
      &app_id=${app_id}
      &app_key=${app_key}
      &from=0&to=2
      &calories=gte%200,%20lte%600`
    $http
      .get(url)
      .then(function(response){
        console.log(response)
        // vm.recipes.push(response)
      }, function(error) {
        console.log(error)
      })
    }
    // function for getting the recipes for Muscles
  function BulkRecipe() {
    var query = 'chicken'
    var app_key = process.env.EDAMAM_API_KEY;
    var app_id = process.env.EDAMAM_APP_ID;
    var url = `https://api.edamam.com/search?q=${query}
      &app_id=${app_id}
      &app_key=${app_key}
      &from=0&to=2
      &calories=gte%750,%20lte%1200`
    $http
      .get(url)
      .then(function(response){
        console.log(response)
        // vm.recipes.push(response)
      }, function(error) {
        console.log(error)
      })
    }
  }
})();
