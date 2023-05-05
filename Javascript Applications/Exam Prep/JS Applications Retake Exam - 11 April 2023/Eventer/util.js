export function getUserData() {
  return localStorage.getItem('userData');
}

export function clearUserData() {
  localStorage.clear();
}

export function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

export function createOptions(method = 'get', data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData != null) {
    options.headers['X-Authorization'] = userData.token;
  }

  return options;
}
