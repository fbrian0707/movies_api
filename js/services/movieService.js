(function(){
app = angular.module("movieApi");
var movieService = function($http){
var apiKey = '9fd12c1bbb7e5e1109b9078fa165ba05';

var getPopular = function(){
	//console.log('called');
return $http.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&include_video=true')
.then(function(res){
	return res.data;
});	
};

var getMovie = function(id){
	return $http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+apiKey+'&append_to_response=videos')
.then(function(res){
	return res.data;
});
};

return {
	getMovies: getPopular,
	getMovie:  getMovie
}

};


app.factory("movieService",movieService);
}());