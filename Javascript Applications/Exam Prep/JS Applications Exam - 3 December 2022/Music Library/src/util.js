export function clearUserData() {
  localStorage.clear();
}

export function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
}

export function createOptions(method = 'post', data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData) {
    options.headers['X-Authorization'] = userData.token;
  }

  return options;
}
