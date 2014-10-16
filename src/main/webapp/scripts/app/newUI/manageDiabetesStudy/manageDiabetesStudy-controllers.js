'use strict';

require('angular-route');

module.exports = angular.module('ppManageDiabetesStudyController',[
        'ngRoute',
        require('./manageDiabetesStudy-services.js').name
    ])

    .controller('DiabetesStudyController', ['$scope', '$route', 'Responsive',
        function($scope, $route, Responsive) {
            
            $scope.taskRemaining = 4;
            $scope.finishedTask = 0;
            $scope.percentase = 0;
            $scope.showNotification = true;
            $scope.physical = true;
            $scope.sleep = true;
            $scope.eat = true;
            $scope.pain = true;

            $scope.change = function(taskName) {
            	$scope.taskRemaining--;
            	$scope.finishedTask++;
            	$scope.percentase = (100/4)*$scope.finishedTask;
            	$scope.showNotification = true;
            	switch(taskName) {
            		case "physical":
            				$scope.physical = false;
            				$scope.taskName = "Physical Activity";
            			break;
            		case "sleep":
            				$scope.sleep = false;
            				$scope.taskName = "Sleep Habits";
            			break;
            		case "eat":
            				$scope.eat = false;
            				$scope.taskName = "Eating Habits";
            			break;
            		case "pain":
            				$scope.pain = false;
            				$scope.taskName = "Pain and Discomfort";
            			break;
            	}	
            	console.log("enter");
            };

            $scope.close = function() {
            	$scope.showNotification = false;
            }
        }
    ])