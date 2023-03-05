class Laptop {
  constructor(info, quality) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand,
    };
    this.quality = quality;
  }
  isOn = false;

  turnOn() {
    this.isOn = true;
    this.quality--;
    return this.isOn;
  }
  turnOff() {
    this.isOn = false;
    this.quality--;
    return this.isOn;
  }
  showInfo() {
    return JSON.stringify({
      producer: this.info.producer,
      age: this.info.age,
      brand: this.info.brand,
    });
  }
  get price() {
    return 800 - (this.info.age * 2) + (this.quality * 0.5);
  }
}

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)
