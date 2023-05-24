function solve() {
    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const listMails = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const trashList = document.querySelector('.delete-list');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', clearInputFields);

    function onAdd(e) {
        e.preventDefault();

        const recipient = recipientInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (recipient == '' || title == '' || message == '') {
            return;
        }

        const liAddElement = document.createElement('li');
        const titleElement = document.createElement('h4');
        titleElement.textContent = 'Title: ' + title;
        const recipientElement = document.createElement('h4');
        recipientElement.textContent = 'Recipient Name: ' + recipient;
        const messageElement = document.createElement('span');
        messageElement.textContent = message;
        const divElement = document.createElement('div');
        divElement.id = 'list-action';
        const sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);

        sendBtn.addEventListener('click', onSend);

        divElement.appendChild(sendBtn);
        divElement.appendChild(deleteBtn);

        liAddElement.appendChild(titleElement);
        liAddElement.appendChild(recipientElement);
        liAddElement.appendChild(messageElement);
        liAddElement.appendChild(divElement);

        listMails.appendChild(liAddElement);

        clearInputFields();

        function onSend(e) {
            e.preventDefault();
            liAddElement.remove();

            const liSendElement = document.createElement('li');
            const recipientSpanElement = document.createElement('span');
            recipientSpanElement.textContent = 'To: ' + recipient;
            const titleSpanElement = document.createElement('span');
            titleSpanElement.textContent = 'Title: ' + title;
            const divSendElement = document.createElement('div');
            divSendElement.classList.add('btn');
            const delBtn = document.createElement('button');
            delBtn.type = 'submit';
            delBtn.classList.add('delete');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', (e) => onDelete(e, liSendElement));

            divSendElement.appendChild(delBtn);

            liSendElement.appendChild(recipientSpanElement);
            liSendElement.appendChild(titleSpanElement);
            liSendElement.appendChild(divSendElement);

            sentList.appendChild(liSendElement);
        }

        function onDelete(e, liSendElement) {
            e.preventDefault();
            if (e.target.id == 'delete') {
                liAddElement.remove();
            } else {
                liSendElement.remove();
            }

            const liTrashElement = document.createElement('li');
            const spanTrashRecipientElement = document.createElement('span');
            spanTrashRecipientElement.textContent = 'To: ' + recipient;
            const spanTrashTitleElement = document.createElement('span');
            spanTrashTitleElement.textContent = 'Title: ' + title;

            liTrashElement.appendChild(spanTrashRecipientElement);
            liTrashElement.appendChild(spanTrashTitleElement);
            trashList.appendChild(liTrashElement);
        }
    }

    function clearInputFields(e) {
        e ? e.preventDefault() : null;

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}

solve();
