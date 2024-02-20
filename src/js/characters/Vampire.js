import Character from "../Character";

export default class Vampire extends Character {
  constructor(level, name) {
    super(level);
    this.name = name;
    this.attack = 25;
    this.defence = 25;
    this.type = 'Vampire';
  }
}