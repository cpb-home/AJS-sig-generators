import Character from "../Character";

export default class Daemon extends Character {
  constructor(level, name) {
    super(level);
    this.name = name;
    this.attack = 10;
    this.defence = 10;
    this.type = 'Daemon';
  }
}