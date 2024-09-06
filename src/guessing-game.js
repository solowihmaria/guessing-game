class GuessingGame {
    constructor() {
      // инициализация переменных
      this.min = null;
      this.max = null;
      this.currentGuess = null; 
    }

    // начальный диапазон из теста берем
    setRange(min, max) {
      this.min = min; 
      this.max = max; 
    }
    
    // метод угадывания
    guess() {
      // берём среднее значение между min и max, округляем до ближайшего целого числа
      this.currentGuess = Math.round((this.min + this.max) / 2);
      return this.currentGuess; 
    } 
    //  если предположение больше загаданного числа
    lower() {
      // предположение становится максимальной границей 
      this.max = this.currentGuess;
    }
    //  если предположение меньше загаданного числа
    greater() {
      // предположение становится минимальной границей
      this.min = this.currentGuess;
    }
  }
  
  
module.exports = GuessingGame;
