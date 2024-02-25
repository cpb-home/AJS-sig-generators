export default class Team {

  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    
    for (let i = 0; i < Object.keys(this).length; i++) {
      yield this[i];
    }
/*
    while (this[this.current]) {
      yield this[this.current++];
    }
*/
  }
}