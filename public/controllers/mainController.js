(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('mainController', mainController)

  mainController.$inject = ['$http'];

  function mainController($http) {
    var vm = this
    vm.title = '[ Eaten Eat Eating ]'
  }

})();
