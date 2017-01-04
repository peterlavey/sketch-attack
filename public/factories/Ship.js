const Keyboard = require('./Keyboard');
const Player = require('./Player');

module.exports = class Ship extends Player{
  constructor(){
    super();
    this.grad = Math.PI / 180;
    const _left = new Keyboard(37);
    const _right = new Keyboard(39);
    const _up = new Keyboard(38);
    const _down = new Keyboard(40);

    _left.press=function(){
      this.rotation=-.2;
    }.bind(this)

    _right.press=function(){
      this.rotation=.2;
    }.bind(this)

    _up.press=function(){
      this.accelerate();
      this.vx= this.getTrajectoryX() * this.speed;
      this.vy=- this.getTrajectoryY() * this.speed;
    }.bind(this)

    _down.press=function(){
      this.accelerate();
      this.vx=(this.getTrajectoryX() * -1) * this.speed;
      this.vy=- (this.getTrajectoryY() * -1) * this.speed;
    }.bind(this)

    _left.release=function(){
      if(!_right.isDown){
        this.rotation=0;
      }
    }.bind(this)

    _right.release=function(){
      if(!_left.isDown){
        this.rotation=0;
      }
    }.bind(this)

    _up.release=function(){
      if(!_down.isDown){
        this.disaccelerate();
        this.vx*=this.speed;
        this.vy*=this.speed;
      }
    }.bind(this)

    _down.release=function(){
      if(!_up.isDown){
        this.disaccelerate();
        this.vx*=this.speed;
        this.vy*=this.speed;
      }
    }.bind(this)

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
    this.sprite.rotation += this.rotation;
    this.sprite.x += this.vx;
    this.sprite.y += this.vy;
  }

  //Calcula trayectoria según radianes
  //http://www.losersjuegos.com.ar/referencia/articulos/seno_coseno
  //http://thepythongamebook.com/en:pygame:step017
  radianToDegree(radian){
    return (radian / Math.PI) * 180;
  }

  getTrajectoryX(){
    return Math.sin(this.radianToDegree(this.sprite.rotation) * this.grad);
  }

  getTrajectoryY(){
    return Math.cos(this.radianToDegree(this.sprite.rotation) * this.grad);
  }
}
