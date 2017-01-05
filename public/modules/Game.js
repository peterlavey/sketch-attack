const Stage = require('./Stage');
const EventEmitter = require('events').EventEmitter;
const Ship = require('./Ship');

module.exports = class Game{
  constructor(){
    this.eventEmitter = new EventEmitter();
    this._players = [];
    this._stage = new Stage();

    //TODO:Añadir debe ser por conexión de usuario
    this.addPlayer();

    this.engine();
  }

  addPlayer(){
    this._players.push(new Ship(this, 'black'));
  }

  //TODO: Remover un jugador al estar en estado muerto
  removePlayer(){

  }

  engine(){
    this._stage.start();
    this.eventEmitter.emit('update');
    requestAnimationFrame(this.engine.bind(this));
  }
}
