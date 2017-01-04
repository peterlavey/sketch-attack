class Loader {
	constructor(){
		this.resources = {players:[{name:'black', url:'assets/black.png'}]};
	}

  loadResource(category, callback) {
    PIXI.loader.add(this.resources[category]).load(callback);
    return this;
  }
}

module.exports = new Loader();
