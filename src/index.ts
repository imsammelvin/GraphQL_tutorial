import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/schema.js';
import { resolvers } from './resolvers/resolver.js';

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// start server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);