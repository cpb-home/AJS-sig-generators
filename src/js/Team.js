export default class Team {
  current = 0;
  
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    
    while (this[this.current]) {
      yield this[this.current++];
    }

  }
}