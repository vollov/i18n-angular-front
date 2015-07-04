'use strict';

//angular.module('labApps',['ngRoute','ngResource','todoModule',
//                          'commonModule',
//                          'sportsControllers',
//                          'sportsFilters',
//                          'sportsServices',
//                          'sportsDirectives']).config(function($routeProvider){
//	$routeProvider.when('/sports', {
//		//controller : 'SettingCtrl',
//		templateUrl : '/views/sports/store.html'
//	}).when('/todo', {
//		controller : 'ToDoCtrl',
//		templateUrl : '/views/todo/todo.html'
//	}).when('/checkout', {
//		templateUrl : '/views/sports/checkout.html'
//	})
//	.when("/complete", {
//		templateUrl: "/views/sports/thankyou.html"
//	})
//	.when("/placeorder", {
//		controller : 'sportsStoreCtrl',
//		templateUrl: "/views/sports/placeOrder.html"
//	}).when("/login", {
//		templateUrl : "/views/sports/login.html"
//	}).when("/admin/main", {
//		templateUrl : "/views/sports/admin/main.html"
//	}).otherwise({
//		redirectTo : '/login'
//	});
//});

angular.module('labApps', [ 'ngRoute', 'appControllers','pascalprecht.translate' ])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			controller : 'SettingCtrl',
			templateUrl : '/views/home.html'
		}).when('/about', {
			controller : 'SettingCtrl',
			templateUrl : '/views/about.html'
		}).otherwise({
			redirectTo : '/home'
		});
	})
	.config(function ($translateProvider) {
		  $translateProvider.translations('en', {
			    HOME_TITLE: 'Home',
			    ABOUT_TITLE: 'About'
			  });
			  $translateProvider.translations('zh', {
				    HOME_TITLE: '首页',
				    ABOUT_TITLE: '关于'
			  });
			  $translateProvider.preferredLanguage('en');
			  //$translateProvider.useSanitizeValueStrategy('sanitize');
			});