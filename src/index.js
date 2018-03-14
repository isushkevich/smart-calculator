class SmartCalculator {
  constructor( initialValue ) {
    this.exp = initialValue;
    return this;
  }

  add( number ) {
    this.exp += "+" + number;
    return this;
  }

  subtract( number ) {
    this.exp += "-" + number;
    return this;
  }

  multiply( number ) {
    this.exp += "*" + number;
    return this;
  }

  devide( number ) {
    this.exp += "/" + number;
    return this;
  }

  pow( number ) {
    this.exp += "**" + number;
    return this;
  }

  valueOf() {
    return eval( this.exp );
  }
}

module.exports = SmartCalculator;