var app = angular.module('StarterApp', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/results', {
            templateUrl: 'partials/results.html',
            controller: 'resultsCtrl'
        }).
        when('/fixtures', {
            templateUrl: 'partials/fixtures.html',
            controller: 'fixturesCtrl'
        }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'AppCtrl'
            }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller('AppCtrl', ['$scope', '$http', '$filter','myPageCtx', function ($scope, $http, $filter,myPageCtx) {
    $scope.searchTxt = new Object();
    $scope.searchTxt.status = 'TIMED';
    $scope.myPageCtx = myPageCtx;
    $http.get("scripts/FixtureData.json").then(function (result) {
        
        $scope.fixtures = result.data.fixtures;

        //$scope.featuredMatch
         var test = $filter('filter')($scope.fixtures, { status: "TIMED" });
         $scope.featuredMatch = test[0];
        $scope.startsIn = new Object();
        var miliseconds = Math.abs(new Date() - Date.parse($scope.featuredMatch.date));
        var dhm = DaysHrsMins(miliseconds);
        $scope.startsIn.Days = dhm.Days;
        $scope.startsIn.Hrs = dhm.Hrs;
        $scope.startsIn.Mins = dhm.Mins;
    });
   
  
}]);

app.controller('resultsCtrl', ['$scope', '$http', '$filter','myPageCtx' ,function ($scope, $http, $filter,myPageCtx) {
    $scope.searchTxt = new Object();
    $scope.searchTxt.status = 'FINISHED';
    myPageCtx.HeaderTitle = 'Results';
    myPageCtx.ActiveFooterIcon = 'results';
    $http.get("scripts/FixtureData.json").then(function (result) {

        $scope.fixtures = result.data.fixtures;

        //$scope.featuredMatch
        var test = $filter('filter')($scope.fixtures, { status: "TIMED" });
        $scope.featuredMatch = test[0];
        $scope.startsIn = new Object();
        var miliseconds = Math.abs(new Date() - Date.parse($scope.featuredMatch.date));
        var dhm = DaysHrsMins(miliseconds);
        $scope.startsIn.Days = dhm.Days;
        $scope.startsIn.Hrs = dhm.Hrs;
        $scope.startsIn.Mins = dhm.Mins;
    });


}]);

app.controller('fixturesCtrl', ['$scope', '$http', '$filter','myPageCtx', function ($scope, $http, $filter,myPageCtx) {
    $scope.searchTxt = new Object();
    $scope.searchTxt.status = 'TIMED';

    myPageCtx.HeaderTitle = 'Fixtures';
    myPageCtx.ActiveFooterIcon = 'fixtures';
    $http.get("scripts/FixtureData.json").then(function (result) {

        $scope.fixtures = result.data.fixtures;

        //$scope.featuredMatch
        var test = $filter('filter')($scope.fixtures, { status: "FINISHED" });
        $scope.featuredMatch = test[0];
        $scope.startsIn = new Object();
        var miliseconds = Math.abs(new Date() - Date.parse($scope.featuredMatch.date));
        var dhm = DaysHrsMins(miliseconds);
        $scope.startsIn.Days = dhm.Days;
        $scope.startsIn.Hrs = dhm.Hrs;
        $scope.startsIn.Mins = dhm.Mins;
    });


}]);

function DaysHrsMins(t) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000),
        pad = function (n) { return n < 10 ? '0' + n : n; };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    var r = new Object();
    r.Days = d;
    r.Hrs = pad(h);
    r.Mins =pad(m)
    return r;
}
