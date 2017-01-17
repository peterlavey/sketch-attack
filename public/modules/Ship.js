const Keyboard = require('./Keyboard');
const Player = require('./Player');
const EventEmitter = require('events').EventEmitter;

module.exports = class Ship extends Player{
  constructor(game, type){
    super(game, type);
    this.grad = Math.PI / 180;
    const _left = new Keyboard(37);
    const _right = new Keyboard(39);
    const _up = new Keyboard(38);
    const _down = new Keyboard(40);

    this.create();

    _left.press=()=> this.rotation=-.2;
    _right.press=()=> this.rotation=.2;
    _up.press=()=> {
      this.accelerate();
      this.vx= this.getTrajectoryX() * this.speed;
      this.vy=- this.getTrajectoryY() * this.speed;
    }
    _down.press=()=>{
      this.accelerate();
      this.vx=(this.getTrajectoryX() * -1) * this.speed;
      this.vy=- (this.getTrajectoryY() * -1) * this.speed;
    }
    _left.release=()=>{
      if(!_right.isDown){
        this.rotation=0;
      }
    }
    _right.release=()=>{
      if(!_left.isDown){
        this.rotation=0;
      }
    }
    _up.release=()=>{
      if(!_down.isDown){
        this.disaccelerate();
        this.vx*=this.speed;
        this.vy*=this.speed;
      }
    }
    _down.release=()=>{
      if(!_up.isDown){
        this.disaccelerate();
        this.vx*=this.speed;
        this.vy*=this.speed;
      }
    }
  }

  accelerate(){
    if(this.speed < this.maxSpeed){
      console.log(this.speed);
      this.speed += this.acceleration;
    }else{
      this.speed = this.maxSpeed;
    }
  }

  disaccelerate(){
    if(this.speed){
      this.speed -= this.acceleration;
    }else if(this.speed < 0){
      this.speed = 0;
    }
  }

  update(){
    this._sprite.rotation += this.rotation;
    this._sprite.x += this.vx;
    this._sprite.y += this.vy;

    console.log("ENGINE!!");
  }

  //Calcula trayectoria según radianes
  //http://www.losersjuegos.com.ar/referencia/articulos/seno_coseno
  //http://thepythongamebook.com/en:pygame:step017
  radianToDegree(radian){
    return (radian / Math.PI) * 180;
  }

  getTrajectoryX(){
    return Math.sin(this.radianToDegree(this._sprite.rotation) * this.grad);
  }

  getTrajectoryY(){
    return Math.cos(this.radianToDegree(this._sprite.rotation) * this.grad);
  }
}
