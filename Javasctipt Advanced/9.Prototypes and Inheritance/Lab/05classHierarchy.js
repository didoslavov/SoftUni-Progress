function classHierarchy() {
  class Figure {
    constructor() {
      this.units = 'cm';
    }

    get area() {}

    changeUnits(u) {
      this.units = u;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    get area() {
      if (this.units === 'mm') return Math.PI * (this.radius * 10) ** 2;
      if (this.units === 'm') return Math.PI * (this.radius / 100) ** 2;

      return Math.PI * this.radius ** 2;
    }

    toString() {
      let u = this.units;
      let r = this.radius;
      let radius =
        u == 'mm' ? r * 10 : u == 'm' ? r / 100 : r;
      return `${super.toString()} Area: ${this.area} - radius: ${radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
      this.units = units;
    }

    get area() {
      if (this.units === 'mm') return this.width * 10 * (this.height * 10);
      if (this.units === 'm') return (this.width / 100) * (this.height / 100);

      return this.width * this.height;
    }

    toString() {
      let u = this.units;
      let w = this.width;
      let h = this.height;

      let width =
        u == 'mm' ? w * 10 : u == 'm' ? w / 100 : w;
      let height =
        u == 'mm' ? h * 10 : u == 'm' ? h / 100 : h;
      return `${super.toString()} Area: ${
        this.area
      } - width: ${width}, height: ${height}`;
    }
  }

  return { Figure, Circle, Rectangle };
}

const { Figure, Circle, Rectangle } = classHierarchy();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let w = new Rectangle(3, 4, 'mm');
console.log(w.area); // 1200
console.log(w.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
w.changeUnits('cm');
console.log(w.area); // 12
console.log(w.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
