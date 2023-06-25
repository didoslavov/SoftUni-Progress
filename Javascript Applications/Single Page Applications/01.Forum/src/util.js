function createElement(tagName, textContent, attributes, children = []) {
    const element = document.createElement(tagName);
    const PARAMS = {
        alt: (value) => element.setAttribute('alt', value),
        styles: (styles) => styles.forEach(([s, v]) => (element.style[s] = v)),
        width: (value) => element.setAttribute('width', value),
        height: (value) => element.setAttribute('height', value),
        colspan: (value) => element.setAttribute('colspan', value),
        href: (value) => element.setAttribute('href', value),
        class: (value) => element.classList.add(value),
        id: (value) => (element.id = value),
        onclick: (value) => element.addEventListener('click', value),
        disabled: () => element.setAttribute('disabled', ''),
        src: (value) => element.setAttribute('src', value),
    };

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
    }

    if (children.length == 0) {
        return element;
    }

    children.forEach((c) => element.appendChild(c));

    return element;
}

export function createDetails(post) {
    const date = new Date(post.date).toISOString().replace('T', ' ').substring(0, 19);
    const element = createElement('div', null, { class: 'header' }, [
        createElement('img', null, { src: './static/profile.png', alt: 'avatar' }),
        createElement('p', ` posted on `, null, [createElement('time', date)]),
        createElement('p', post.content, { class: 'post-content' }),
    ]);

    const username = createElement('span', post.username);
    element.querySelector('p').prepend(username);
    return element;
}

export function createComment(comment) {
    const date = new Date(comment.date);
    const element = createElement('div', null, { class: 'topic-name-wrapper' }, [
        createElement('div', null, { class: 'topic-name' }, [
            createElement('p', ' commented on ', null, [createElement('time', date.toLocaleString())]),
            createElement('div', null, { class: 'post-content' }, [createElement('p', comment.content)]),
        ]),
    ]);

    element.querySelector('p').prepend(createElement('strong', comment.username));
    return element;
}

export function createPostPreview(post) {
    const element = createElement('div', null, { class: 'topic-name-wrapper' }, [
        createElement('div', null, { class: 'topic-name' }, [
            createElement('a', null, { href: '/details', id: post._id, class: 'normal' }, [createElement('h2', post.title)]),
        ]),
        createElement('div', null, { class: 'columns' }, [
            createElement('div', null, null, [
                createElement('p', 'Date: ', null, [createElement('time', post.date)]),
                createElement('div', null, { class: 'nick-name' }, [
                    createElement('p', 'Username: ', null, [createElement('span', post.username)]),
                ]),
            ]),
        ]),
    ]);

    return element;
}
