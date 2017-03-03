(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('homeController', homeController)

  homeController.$inject = ['$http'];

  function homeController($http) {
    var vm = this
    vm.title = 'Hey! Ready To Not Be You?!'
  }

})();
