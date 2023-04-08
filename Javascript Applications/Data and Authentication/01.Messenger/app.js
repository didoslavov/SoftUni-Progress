function attachEvents() {
  document.getElementById('refresh').addEventListener('click', displayMessages);
  document.getElementById('submit').addEventListener('click', postMessage);
}

attachEvents();
displayMessages();

async function displayMessages() {
  const data = await getMessages();

  const content = Object.values(data).map(({ author, content }) => `${author}: ${content}`);
  
  document.getElementById('messages').textContent = content.join('\n');
}

async function getMessages() {
  const response = await fetch('http://localhost:3030/jsonstore/messenger');
  const data = await response.json();

  return data;
}

async function postMessage() {
    const author = document.querySelector('[name="author"]').value;
    const content = document.querySelector('[name="content"]').value;
    const option = { author, content };

    await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(option),
    });

    displayMessages();
}
