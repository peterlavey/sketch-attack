module.exports = class Player {
	constructor(game, type, username){
		this._type=type;
		this._game=game;
		this.username=username;
    this.vx=0;
    this.vy=0;
    this.rotation=0;

		this.isMoving=false;

		this.maxSpeed=2;
		this.acceleration=.1;
		this.speed=0;

	}

	create(){
		this.createLabel();
		this.setSprite(this._type);
		this.config();
	}

	createLabel(){
		this._textStyle = { font : '14px Arial', fill: 'rgb(0,255,0)', align : 'center' };
		this._text = new PIXI.Text( this.username, this._textStyle );
		//this._text.anchor.x = 0.5;
		this._text.anchor.y = 1.5;
		this._game._stage.addChild( this._text );
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
}
