const { ApolloServer } = require('apollo-server');
const { config } = require('dotenv');
const { typeDefs } = require('./typeDefs')
const { books } = require('./data')

config();

const resolvers = {
  Query: {
    books: () => books,
  },
};

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  engine: {
    apiKey: process.env.APOLLO_KEY,
  },
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
