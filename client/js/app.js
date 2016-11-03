angular.module('howDoISound', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])
  .directive('navigationBar', navigationBar)

function router($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the base '/#/' from the url:
  // $locationProvider.html5Mode(true)
  console.log("Hello from the config!")

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('analysis', {
      url: '/analysis',
      templateUrl: 'templates/analysis.html'
      //controller: 'MainController as mc'
    })
    .state('emoji', {
      url: '/emoji',
      templateUrl: 'templates/emoji.html',
      //controller: 'MainController as mc'
    })
}

function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/_nav.html'
  }
}
