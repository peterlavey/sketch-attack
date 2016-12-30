var Loader = (function () {
	var context = {},	resources = {players:[{name:'black', url:'assets/black.png'}]};
  //$.getJSON('path', fn())
	context.load = function (category, callback) {
      PIXI.loader.add(resources[category]).load(callback);
	};
	return context;
}(Loader));
