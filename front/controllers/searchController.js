(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('searchController', searchController)

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this
    vm.title = 'The World Is Your Oyster'
  }

})();
