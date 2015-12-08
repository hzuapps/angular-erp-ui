app.config(function ($routeProvider) {
  // configure the routes
  $routeProvider
    // route for the home page
        .when('/', {
          templateUrl: 'pages/home.html',
          controller: 'homeController'
        })
    // route for the about page
        .when('/about', {
          templateUrl: 'pages/about.html',
          controller: 'aboutController'
        })
    // route for the contact page
        .when('/contact', {
          templateUrl: 'pages/contact.html',
          controller: 'contactController'
        })
    // route for the contact page with subject param
        .when('/contact/:subject', {
          templateUrl: 'pages/contact.html',
          controller: 'contactController'
        })
    // when all else fails
        .otherwise({
          templateUrl: 'pages/routeNotFound.html',
          controller: 'notFoundController'
        });
});