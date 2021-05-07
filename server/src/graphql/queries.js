const {} = require('graphql');
const { UserType } = require('./types');
const { User } = require('../models/index');

const profile = {
    type: UserType,
    description: 'Profile',
    resolve(parent, args, { verifiedUser, userId }) {
        if (!verifiedUser) {
            throw new Error('Acceso denegado');
        } else {
            return User.findById(userId);
        }
    }
};

module.exports = { profile }