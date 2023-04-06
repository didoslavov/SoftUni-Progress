function solve() {
  const info = document.getElementById('info').firstChild;
  const initUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

  const departBtn = document.getElementById('depart');
  const arriveBtn = document.getElementById('arrive');
  
  let nextStop = 'depot';
  let arriving = '';

  async function depart() {
    try {
      const response = await fetch(initUrl + nextStop);

      if (response.status !== 200) {
        throw new Error();
      }

      const data = await response.json();

      info.textContent = `Next stop ${data.name}`;
      arriving = data.name;
      nextStop = data.next;

      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      info.textContent = error;

      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    info.textContent = `Arriving at ${arriving}`;

    arriveBtn.disabled = true;
    departBtn.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
