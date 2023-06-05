function createElement(tagName, textContent, attributes, children = []) {
    const element = document.createElement(tagName);
    const PARAMS = {
        colspan: (value) => element.setAttribute('colspan', value),
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
