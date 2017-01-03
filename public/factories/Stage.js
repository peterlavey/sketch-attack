class Stage {
	constructor(){
    this.renderer = PIXI.autoDetectRenderer(256, 256);
    document.body.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
	}

  addChild(element) {
    this.stage.addChild(element);
    return this;
  }

  start() {
    this.renderer.render(this.stage);
    return this;
  }
}
