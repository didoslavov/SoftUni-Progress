function cats(cats) {
  class Cat {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const cat of cats) {
    const [name, age] = cat.split(' ');
    const cats = new Cat(name, age);

    cats.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
