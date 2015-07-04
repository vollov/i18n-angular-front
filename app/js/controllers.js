'use strict';

angular.module('appControllers', [ ])
.controller('SettingCtrl',function ($scope, $location, $translate) {
	
	$scope.setLang = function(language) {
		$scope.language = language;
		console.log('called SettingCtrl.foo()......');
	};
	
	$scope.changeLanguage = function (key) {
		console.log('called SettingCtrl.changeLanguage() with key=' + key);
	    $translate.use(key);
	};
	$scope.hello = function(name) {
	    alert('Hello ' + (name || 'world') + '!');
	};
})