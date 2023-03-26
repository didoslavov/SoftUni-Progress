function createComputerHierarchy() {
  class Manufacturer {
    constructor(brand) {
      if (new.target === Manufacturer) throw new Error;
      this.manufacturer = brand;
    }
  }

  class Keyboard extends Manufacturer {
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = responseTime;
    }
  }

  class Monitor extends Manufacturer {
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = width;
      this.height = height;
    }
  }

  class Battery extends Manufacturer {
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = expectedLife;
    }
  }

  class Computer extends Manufacturer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) throw new Error;
      super(manufacturer);
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }
    set battery(v) {
      if (!(v instanceof Battery)) throw new TypeError;
      this._battery = v;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }
    set keyboard(v) {
      if (!(v instanceof Keyboard)) throw new TypeError;
      this._keyboard = v;
    }

    get monitor() {
      return this._monitor;
    }
    set monitor(v) {
      if (!(v instanceof Monitor)) throw new TypeError;
      this._monitor = v;
    }
  }

  return {
    Keyboard,
    Monitor,
    Battery,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop(
  'Hewlett Packard',
  2.4,
  4,
  0.5,
  3.12,
  'Silver',
  battery
);
console.log(laptop);
