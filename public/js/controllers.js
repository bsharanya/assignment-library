var assignmentLibraryControllers = angular.module('assignmentLibraryControllers', []);

assignmentLibraryControllers.controller("SearchController", function($scope, $http) {
	$http.get('api/tags')
		.success(function(tags) {
			$scope.tags = tags;
			console.log("Success " + tags.toString());
		})
		.error(function(data) {
			console.log("Failure " + data);
		});

    $scope.search = function(search_key) {
        // do nothing right now.
    }
});

assignmentLibraryControllers.controller("TagsController", function($scope, $routeparams, $http){
    $http.get('api/tags/'+ $routeparams.tagId)
        .success(function(tagDetails){
            console.log(tagDetails);
        })
        .error(function(data){
            console.log("Boo");
        });
})