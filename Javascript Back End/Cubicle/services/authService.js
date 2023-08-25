async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == 'peter' && password == '123456') {
            res({
                _id: '1242125cf24151',
                username: 'Peter',
            });
        } else {
            rej(new Error('Incorect username or password!'));
        }
    });
}

module.exports = {
    login,
};
