<<<<<<< HEAD
(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: '/templates/landing.html'
          })
          .state('album', {
              url: '/album',
              templateUrl: '/templates/album.html'
          .state('collection', {
              url: '/collection',
              templateUrl: '/templates/collection.html'
                  });
                     }

     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
=======
function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: '/templates/landing.html'
          })
          .state('album', {
              url: '/album',
              templateUrl: '/templates/album.html'
          .state('collection', {
              url: '/collection',
              templateUrl: '/templates/collection.html'
                  });
                     }
 
     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
>>>>>>> 59deb315105c3153f2c49fa2f9b20de0c91010b3
