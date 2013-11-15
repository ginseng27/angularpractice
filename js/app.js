var app = angular.module("airline", []);

app.config(airlineRouter);

function airlineRouter ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'partials/destinations.html'})
        .when('/flights', {template: '<h3>Flights</h3>'})
        ;
};
