(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
      const arr = this.slice(n);
      return arr;
  };

  Array.prototype.take = function (n) {
      const arr = this.slice(0, n);
      return arr;
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, x) => acc + x, 0);
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let x = [1, 2, 3, 4, 5, 6];
console.log(x.skip(1000));
