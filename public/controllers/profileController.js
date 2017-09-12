// (function() {
//   "use strict";

//   angular
//     .module('myApp')
//     .controller('profileController', profileController)

//   profileController.$inject = ['$http'];

//   function profileController($http) {
//     var vm = this
//     vm.title = 'This Is You. For Now. Unless. You Know.'

//     vm.delete = deleteRecipe;

//     getRecipes();

// // displays all bookmarked recipes
//     function getRecipes() {
//       console.log('step 2 dawg')
//       $http
//         .get('/api/recipes')
//         .then(function(res) {
//           vm.bookmark = res.data.recipes
//           console.log(vm.bookmark)
//       })
//     }

// // removes recipes from the bookmarked page but needs to re-click/refresh page to show difference
//     function deleteRecipe(bk) {
//       let url = '/api/recipes/' + bk._id
//       $http
//         .delete(url)
//         .then(function(res ) {
//           console.log('deleted!')
//           getRecipes()
//           $route.reload()
//         }, function(err) {
//           console.log(err)
//       })
//     }
//   }
// })();

