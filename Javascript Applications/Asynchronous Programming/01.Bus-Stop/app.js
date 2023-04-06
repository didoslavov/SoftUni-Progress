async function getInfo() {
  const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
  const input = document.getElementById('stopId');
  const result = document.getElementById('stopName');
  const buses = document.getElementById('buses');

  const busStop = input.value;

  buses.innerHTML = '';
  input.value = '';

  try {
    const response = await fetch(baseUrl + busStop);
    const data = await response.json();

    result.textContent = data.name;

    for (const busId in data.buses) {
      const li = document.createElement('li');
      const time = data.buses[busId];

      li.textContent = `Bus ${busId} arrives in ${time} minutes`;
      buses.appendChild(li);
    }
  } catch (error) {
    result.textContent = 'Error';
  }
}
