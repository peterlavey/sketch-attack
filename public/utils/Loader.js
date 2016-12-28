var Loader = (function () {
	var context = {},	json = {players:[{name:'weasel', path:'assets/weasel.png'}]};
  //$.getJSON('path', fn())
	context.load = function (category, callback) {
    json[category].forEach(function(resource){
      PIXI.loader.add(resource.name, resource.path);
    });
		PIXI.loader.load(callback);
	};
	return context;
}(Loader));
