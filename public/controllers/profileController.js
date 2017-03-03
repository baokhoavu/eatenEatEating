(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('profileController', profileController)

  profileController.$inject = ['$http'];

  function profileController($http) {
    var vm = this
    vm.title = 'This Is You. For Now. Unless. You Know.'

    vm.bookmark = [];

    getRecipes()

    function getRecipes() {
      console.log('step 2 dawg')
      $http
        .get('/api/recipes')
        .then(function(res) {
          vm.bookmark = res.data.recipes
          console.log(vm.bookmark)
          // console.log
        // console.log('1' res.data)
        // console.log('2' res.data.recipes)
        // console.log('3' res.data.Recipes)
        // vm.allRecipes = res.data.recipes;
      })
    }
  }

})();

