(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('homeController', homeController)

  homeController.$inject = ['$http'];

  function homeController($http) {
    var vm = this
    vm.title = 'These are your yummies that you saved for later'
    vm.all = []

    vm.delete = deleteRecipe;

    getRecipes();

// displays all bookmarked recipes
    function getRecipes() {
      console.log('step 2 dawg')
      $http
        .get('/api/recipes')
        .then(function(res) {
          vm.bookmark = res.data.recipes
          vm.all = res.data.recipes
          console.log(vm.bookmark)
      })
    }

// removes recipes from the bookmarked page but needs to re-click/refresh page to show difference
    function deleteRecipe(bk) {
      let url = '/api/recipes/' + bk._id
      $http
        .delete(url)
        .then(function(res) {
        //   console.log('deleted!')
          // getRecipes();
        //   $route.reload()
        //   getRecipes();
        }, function(err) {
          console.log(err)
      })
        .then(getRecipes())
    }
  }
})();
