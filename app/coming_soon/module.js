(function(angular){
	angular.module('moviecat.coming_soon', ["ngRoute"])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$locationProvider.hashPrefix("");
		$routeProvider.when('/coming_soon',{
			templateUrl : "./coming_soon/view.html"
		})
	}])
})(angular)