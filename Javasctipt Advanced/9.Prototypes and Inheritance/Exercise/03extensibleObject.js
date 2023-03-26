function extensibleObject() {
  const obj = {};
  const extensible = Object.create(obj);

  extensible.extend = function (object) {
    Object.entries(object).forEach(([k, v]) => {
      if (typeof v === 'function') {
        obj[k] = v;
      } else {
        extensible[k] = v;
      }
    });
  };

  return extensible;
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: 'someString',
};
myObj.extend(template);
console.log(myObj);
