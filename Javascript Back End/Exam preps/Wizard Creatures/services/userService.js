const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'myNewSecret123456';

async function register(firstName, lastName, email, password) {
    const duplicated = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
    });

    if (duplicated) {
        throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        hashedPassword,
    });

    //TODO: See assignment if register create user session
    return createSession(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
    });

    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
        throw new Error('Incorrect email or password!');
    }

    return createSession(user);
}

function createSession({ _id, email }) {
    const payload = {
        _id,
        email,
    };

    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken,
};
