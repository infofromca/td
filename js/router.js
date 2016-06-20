mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/Products', {
        templateUrl: 'templates/products.htm',
        controller: 'ProductsController'
    }).
    when('/Claims', {
        templateUrl: 'templates/claims.htm',
        controller: 'ClaimsController'
    }).
    when('/ContactUs', {
        templateUrl: 'templates/form.htm',
        controller: 'FormController'
    }).
    otherwise(
        '/ContactUs'
    );
}]);






