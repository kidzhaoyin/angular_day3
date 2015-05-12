app.directive('flash-card', function () {
    return {
	restrict: 'E',
	scope: {
	  card: '=',
	  answerFunction: '='
	},
	templateUrl: 'js/directives/flash-card/flash-card.html'
    };


});
