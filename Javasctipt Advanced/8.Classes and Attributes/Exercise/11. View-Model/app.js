class Textbox {
  constructor(selector, pattern) {
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = pattern;
    Array.from(this.elements).forEach((x) =>
      x.addEventListener('change', () => (this.value = x.value))
    );
  }

  get value() {
    return this.elements[0].value;
  }
  set value(v) {
    Array.from(this._elements).forEach((x) => (x.value = v));
  }

  get elements() {
    return this._elements;
  }

  isValid() {
    return !this._invalidSymbols.test(this.value);
  }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');
textbox.value = 'Tesst';
