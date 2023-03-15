function solve(area, volume, input) {
    const res = [];

    JSON.parse(input).forEach(f => {
       const ar = area.call(f);
       const vol = volume.call(f);

       res.push({ area: ar, volume: vol});
    });;

    return res;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.log(solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));
