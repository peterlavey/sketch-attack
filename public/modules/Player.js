module.exports = class Player {
	constructor(game, type){
		this._type=type;
		this._game=game;
    this.vx=0;
    this.vy=0;
    this.rotation=0;

		this.maxSpeed=10;
		this.acceleration=.2;
		this.speed=0;

	}

  setSprite(name){
    this._sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
  }

  config(){
		this._body = new PIXI.Container();

    this._sprite.width=50;
    this._sprite.height=50;

    this._sprite.anchor.x=.5;
    this._sprite.anchor.y=.5;

		//this._body.addChild(this._sprite);
		//this._game._stage.addChild(this._body);
		this._game._stage.addChild(this._sprite);

		this._game.eventEmitter.on('update', this.update.bind(this));
  }

	create(){
		this.setSprite(this._type);
		this.config();
	}
}
