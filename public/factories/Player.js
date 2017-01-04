module.exports = class Player {
	constructor(){
    this.vx=0;
    this.vy=0;
    this.rotation=0;

		this.maxSpeed=10;
		this.acceleration=.2;
		this.speed=0;
	}

  setSprite(name){
    this.sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
    this.config();
  }

  config(){
    this.sprite.width=50;
    this.sprite.height=50;

    this.sprite.anchor.x=.5;
    this.sprite.anchor.y=.5;
  }
}
