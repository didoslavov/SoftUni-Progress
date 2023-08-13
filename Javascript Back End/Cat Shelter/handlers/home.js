const path = require('path');

const homeView = (req, res) => {
    res.sendFile('/views/home/index.html', { root: path.join(__dirname, '..') });
};

module.exports = { homeView };
