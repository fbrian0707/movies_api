(function(){
var app = angular.module("movieApi");	
var homeCtrl = function(movieService){
	var self = this;
	movieService.getMovies().then(function(data){
		self.data = data.results;
		console.log(self.data);
		//console.log(self.data.results[0].adult);
	});

};

app.controller('homeCtrl',homeCtrl);
}());