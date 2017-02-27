(function() {

  angular.module('myApp')
    .config(myRoutes)

  myRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

  function myRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home' , {
        url: '/',
        templateUrl: './template/home.html',
        controller: 'homeController',
        controllerAs: 'hm'
      })
      .state('profile' , {
        url: '/profile',
        templateUrl: './template/profile.html',
        controller: 'profileController',
        controllerAs: 'pr'
      })
      .state('search' , {
        url: '/search',
        templateUrl: './template/search.html',
        controller: 'searchController',
        controllerAs: 'sr'
      })

    $urlRouterProvider
      .otherwise('/')
  }
})();
