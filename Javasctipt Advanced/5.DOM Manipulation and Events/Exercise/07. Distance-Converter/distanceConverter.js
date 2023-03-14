function attachEventsListeners() {
  document.getElementById('convert').addEventListener('click', convert);

  function convert() {
    const input = document.getElementById('inputDistance').value;
    const fromType = document.querySelector('#inputUnits').value;
    const toType = document.querySelector('#outputUnits').value;

    const fromUnit = convertToMeter(input, fromType);

    const units = {
        km: fromUnit / 1000,
        m: fromUnit,
        cm: fromUnit / 0.01,
        mm: fromUnit / 0.001,
        mi: fromUnit / 1609.34,
        yrd: fromUnit / 0.9144,
        ft: fromUnit / 0.3048,
        in: fromUnit / 0.0254,
    }

    const toUnit = units[toType];

    document.getElementById('outputDistance').value = toUnit;
  }

  function convertToMeter(input, type) {
    const unit = Number(input);

    const units = {
        km: unit * 1000,
        m: unit,
        cm: unit * 0.01,
        mm: unit * 0.001,
        mi: unit * 1609.34,
        yrd: unit * 0.9144,
        ft: unit * 0.3048,
        in: unit * 0.0254,
    }

    return units[type];
  }
}
