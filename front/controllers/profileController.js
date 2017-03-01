(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('profileController', profileController)

  profileController.$inject = ['$http'];

  function profileController($http) {
    var vm = this
    vm.title = 'This Is You. For Now. Unless. You Know.'
  }

})();

