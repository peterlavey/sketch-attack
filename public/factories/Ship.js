class Ship extends Player{
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
      this.vx= this.getTrajectoryX();
      this.vy=- this.getTrajectoryY();
    }.bind(this)

    _down.press=function(){
      this.vx=this.getTrajectoryX() * -1;
      this.vy=- this.getTrajectoryY() * -1;
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
        this.vx=0;
        this.vy=0;
      }
    }.bind(this)

    _down.release=function(){
      if(!_up.isDown){
        this.vx=0;
        this.vy=0;
      }
    }.bind(this)

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
