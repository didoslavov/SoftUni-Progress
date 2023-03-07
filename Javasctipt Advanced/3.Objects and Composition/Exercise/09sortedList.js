function createSortedList() {
  const collection = [];
  const list = {
    add,
    remove,
    get,
    size: 0,
  };

  return list;

  function add(num) {
    collection.push(num);
    this.size++;
    collection.sort((a, b) => a - b);
  }

  function remove(index) {
    const isValid = indexValidation(index);
    if (isValid) {
      collection.splice(index, 1);
      this.size--;
    }
  }

  function get(index) {
    const isValid = indexValidation(index);
    if (isValid) {
      return collection[index];
    }
  }

  function indexValidation(index) {
    if (index >= 0 && index < collection.length) return true;
    return false;
  }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
