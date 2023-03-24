class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._status = false;
  }

  get online() {
    return this._status;
  }
  set online(value) {
    this._status = value;
    
    if (this.onlineDiv) {
        this.onlineDiv.classList = this._status ? 'title online' : 'title';
    }
  }

  elementFactory(tagName, content) {
    content = content === undefined ? '' : content;
    const element = document.createElement(tagName);
    element.innerHTML = content;
    return element;
  }

  render(id) {
    this.article = this.elementFactory('article');
    this.onlineDiv = this.elementFactory(
      'div',
      `${this.firstName} ${this.lastName}`
    );
    this.infoBtn = this.elementFactory('button', `&#8505;`);
    this.infoDiv = this.elementFactory(
      'div',
      `<span>&phone; ${this.phone}</span>
        <span>&#9993; ${this.email}</span>`
    );

    this.onlineDiv.classList = this.online ? 'title online' : 'title';
    this.infoDiv.classList = 'info';
    this.infoDiv.style.display = 'none';

    this.onlineDiv.appendChild(this.infoBtn);
    this.article.appendChild(this.onlineDiv);
    this.article.appendChild(this.infoDiv);
    

    document.getElementById(id).appendChild(this.article);

    this.infoBtn.addEventListener('click', () => {
        this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none';
    });

  }
}

let contacts = [
  new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
  new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
  new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
];
contacts.forEach((c) => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => (contacts[0].online = true), 2000);
