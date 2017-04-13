var Bridgeman = angular.module('Bridgeman', ['ngRoute', 'ngMessages']);

	Bridgeman.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider){
			$httpProvider.interceptors.push(function($q, $location){									
				return{
					'responseError': function(rejection){
						if(rejection.status == 401){
							$location.url('/');
						}
						return $q.reject(rejection);
						}
					}
				});
			$routeProvider
				.when('/', {
					templateUrl:'partials/homepage.html',					
				}).when('/about', {
					templateUrl:'partials/about.html',					
				}).when('/developer', {
					templateUrl: 'partials/developer.html',
				}).when('/blog', {
					templateUrl: 'partials/blog.html',					
				}).when('/contact', {
					templateUrl: 'partials/contact.html',
					controller: 'contactController'
				}).otherwise({
					redirectTo:'/'
				});
			$locationProvider.html5Mode(true);
		}])