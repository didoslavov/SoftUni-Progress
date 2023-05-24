window.addEventListener('load', solve);

function solve() {
    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');
    const titleInput = document.getElementById('post-title');
    const categoryInput = document.getElementById('post-category');
    const contentInput = document.getElementById('post-content');

    const clearBtn = document.getElementById('clear-btn').addEventListener('click', () => (publishedList.innerHTML = ''));

    const publishBtn = document.getElementById('publish-btn');
    publishBtn.addEventListener('click', onPublish);

    function onPublish(e) {
        e.preventDefault();

        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        if (title == '' || category == '' || content == '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('rpost');

        const article = document.createElement('article');
        const heading = document.createElement('h4');
        heading.textContent = title;
        const categoryElement = document.createElement('p');
        categoryElement.textContent = 'Category: ' + category;
        const contentElement = document.createElement('p');
        contentElement.textContent = 'Content: ' + content;
        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        const approveBtn = document.createElement('button');
        approveBtn.classList.add('action-btn', 'approve');
        approveBtn.textContent = 'Approve';

        editBtn.addEventListener('click', onEdit);
        approveBtn.addEventListener('click', onApprove);

        article.appendChild(heading);
        article.appendChild(categoryElement);
        article.appendChild(contentElement);
        liElement.appendChild(article);
        liElement.appendChild(approveBtn);
        liElement.appendChild(editBtn);

        reviewList.appendChild(liElement);

        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';

        function onEdit() {
            titleInput.value = title;
            categoryInput.value = category;
            contentInput.value = content;

            liElement.remove();
        }

        function onApprove() {
            editBtn.remove();
            approveBtn.remove();

            publishedList.appendChild(liElement);
        }
    }
}
