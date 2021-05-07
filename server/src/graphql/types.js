const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

const { User, Game } = require('../models/index');

const UserType = new GraphQLObjectType({
    name: "User",
    description: "User type",
    fields: () => ({
        _id: { type: GraphQLID },
        username: { type: GraphQLString },
        fullname: { type: GraphQLString },
        games: {
            type: GraphQLList(GameType),
            resolve(parent, args) {
                return Game.find({ userId: parent._id });
            }
        }
    })
});

const GameType = new GraphQLObjectType({
    name: "Game",
    description: "Game type",
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userID);
            }
        }
    })
});

module.exports = { UserType, GameType }