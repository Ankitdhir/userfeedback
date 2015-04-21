/**
 * User Feedback for website
 * User Feedback for website directive for AngularJS
 * By Ankit Dhir (dhir.ankit@gmail.com)
 */

angular.module('userfeedback', [] )
    .directive('userfeedback', function ($parse, $http, $sce, $timeout) {
    return {
        restrict: 'EA',
        scope: {
            "title": "@title",
            "url": "@url"
         },
        template: '<div id="uf_feedback"><div id="uf_title" class="rotate" ng-click="openFeedback()"><h2>'
					+'{{title}}'
                    + '</h2></div><div id="uf_content">'
                    + '<form ng-submit="sendFeedback(userFeedback)"><div id="uf_submit_username"><input placeholder="Name" type="text" ng-model="userFeedback.name" class="form-control" required></div>'
                    + '<div id="uf_submit_username"><input placeholder="E-Mail" type="email" name="username" ng-model="userFeedback.email" class="form-control" required></div>'
                    + '<div id="uf_submit_message"><textarea placeholder="Message" name="message" ng-model="userFeedback.message" class="form-control" required></textarea></div>'
                    + '<div id="uf_submit_loading"></div><input type="submit" value="Submit" class="btn btn-primary uf_button">'
					+ '</form><div id="uf_ajax_message"><h2></h2></div></div></div>',

        link: function($scope, elem, attrs) {
            $scope.openFeedback=function(){
                if ($scope.isOpen) {
                    $('#uf_feedback').animate({ "width": "+=5px" }, "fast")
                        .animate({ "width": "55px" }, "slow")
                        .animate({ "width": "60px" }, "fast");
                    $scope.isOpen = !$scope.isOpen;
                } else {
                    $('#uf_feedback').animate({ "width": "-=5px" }, "fast")
                        .animate({ "width": "340px" }, "slow")
                        .animate({ "width": "330px" }, "fast");

                    // reset properties
                    $('#uf_submit_loading').hide();
                    $('#uf_content form').show()
                    $('#uf_content form .error').removeClass("error");
                    $('#uf_submit_submit input').removeAttr('disabled');
                    $scope.isOpen = !$scope.isOpen;
                }
            }
            $scope.sendFeedback=function(userFeedback){
                $('#uf_submit_loading').show();
                $http.post($scope.url,userFeedback).
                    success(function(responseData, status, headers, config) {
						$scope.userFeedback={};
                        $('#uf_feedback').animate({ "width": "+=5px" }, "fast")
                            .animate({ "width": "55px" }, "slow")
                            .animate({ "width": "60px" }, "fast");
                        $scope.isOpen = !$scope.isOpen;
                    }).
                    error(function(data, status, headers, config) {
                        $('#uf_feedback').animate({ "width": "+=5px" }, "fast")
                            .animate({ "width": "55px" }, "slow")
                            .animate({ "width": "60px" }, "fast");
                        $scope.isOpen = !$scope.isOpen;
                    });
            }
        }
    };
});

