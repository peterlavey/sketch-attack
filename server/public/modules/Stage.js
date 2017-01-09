module.exports = class Stage {
	constructor(){
    this.renderer = PIXI.autoDetectRenderer(1024, 512);
    document.body.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
	}

  addChild(element) {
    this.stage.addChild(element);
    return this;
  }

  start() {
    this.renderer.render(this.stage);
  }
}
