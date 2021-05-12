const { ApolloServer,PubSub } = require('apollo-server');
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const typeDefs = require('./graphql/typeDef');
const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();
const PORT = process.env.port || 5000;

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req, pubsub }) });

mongoose.connect(MONGODB , { useNewUrlParser : true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected!');
        return server.listen({ port : PORT });
    })
    .then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
    .catch(err => {
        console.log("Error while connecting DB/starting the server",err);
    });
