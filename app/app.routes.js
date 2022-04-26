angular
  .module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        // params: { filter: { dynamic: true } },
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        url: '/not-found',
        name: 'not-found',
        template: '<v-notfound-page></v-notfound-page>',
      });
  })
  .config(function ($urlRouterProvider) {
    // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/not-found');
  });
