(function(){
var app = angular.module("movieApi",['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html',
		controllerAs: "$ctrl",
		controller: 'homeCtrl'
	})
	.when('/movies/:movieId',{
		templateUrl: 'partials/movie.html',
		controllerAs: "$ctrl",
		controller: 'movieCtrl'
	})
	.otherwise({redirectTo:"/"});
	
});	
	
	
	
}());