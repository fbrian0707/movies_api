var app = angular.module("movieApi");
var movieCtrl = function($routeParams, movieService){
	var self = this;
	movieService.getMovie($routeParams.movieId).then(function(res){
		self.data = res;
		console.log(self.data);
    	var x = document.getElementById('frame');
		var video='https://www.youtube.com/embed/'+self.data.videos.results[0].key;
		//var  x = document.createElement("IFRAME");
             x.setAttribute("src", video);
          //   x.setAttribute("class", "col-sm-4");
            // x.setAttribute("height", "10vh");
          //   x.setAttribute("width", "10vh");
            // x.setAttribute("height", "20%");+'?autoplay=1'style='background-image:url("http://image.tmdb.org/t/p/w500{{$ctrl.data.backdrop_path}}");background-size:100% 100%;background-repeat:no-repeate'
            // x.setAttribute("allowfullscreen");
          //   x.style.border="none";
		  //   Parent.appendChild(x);
	});
};
app.controller("movieCtrl",movieCtrl);