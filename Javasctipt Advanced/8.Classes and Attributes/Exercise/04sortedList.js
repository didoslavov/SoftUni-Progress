class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index is not valid');
    }
    this.list.splice(index, 1);
    this.size--;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index is not valid');
    }
    return this.list[index];
  }
}

let myList = new List();
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));
