var myApp = angular.module('myApp',['ngRoute','ngCookies']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/home.html',
			controller:'empController'
		})
		.when('/info', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/info/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/info/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/info/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		})
		.when('/signIn', {
			templateUrl:'templates/login.html',
			controller:'empController'
		})
		.when('/list', {
			templateUrl:'user/plist.html',
			controller:'empController'
		})
		.when('/list/:id/places', {
			templateUrl:'user/place.html',
			controller:'empController'
		})
		.when('/login', {
			templateUrl:'user/login.html',
			controller:'empController'
		})
		.when('/regis', {
			templateUrl:'user/registration.html',
			controller:'empController'
		})
		.when('/places', {
			templateUrl:'user/places.html',
			controller:'empController'
		})
		.when('/one', {
			templateUrl:'packages/one.html',
			controller:'empController'
		})
		.when('/two', {
			templateUrl:'packages/two.html',
			controller:'empController'
		})
		.when('/three', {
			templateUrl:'packages/three.html',
			controller:'empController'
		})
		.when('/package', {
			templateUrl:'packages/package.html',
			controller:'empController'
		})
		.when('/event', {
			templateUrl:'packages/event.html',
			controller:'AppController'
		});
});


myApp.run(function($rootScope,$cookies){
	if($cookies.get('token') && $cookies.get('currentUser')){
		$rootScope.token=$cookies.get('token');
		$rootScope.currentUser=$cookies.get('currentUser');

	}
});
