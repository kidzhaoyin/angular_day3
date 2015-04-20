app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.getAllCards = function() {
	  $scope.currentCategory = null;
	  $scope.flashCards = FlashCards.getFlashCards();
	  
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
	};
	$scope.categories = [
	  'MongoDB',
	  'Express',
	  'Angular',
	  'Node'
	];

	$scope.getCategoryCards = function(category){
		FlashCardsFactory.getFlashCards(category).then(function(cards){
			$scope.flashCards = cards;
			$scope.currentCategory = category;
	
	});
	}
});
