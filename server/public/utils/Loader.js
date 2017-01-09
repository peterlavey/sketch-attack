class Loader {
	constructor(){
		this.resources = {players:[{name:'black', url:'assets/black.png'}, {name:'test', url:'assets/test.png'}]};
	}
	
  loadResources(category, callback) {
    PIXI.loader.add(this.resources[category]).load(callback);
    return this;
  }
}

module.exports = new Loader();
