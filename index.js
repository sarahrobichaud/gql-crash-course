import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

import data from "./_data.js";
// Server setup
const PORT = process.env.PORT || 4000;

const resolvers = {
  Query: {
    games() {
      return data.games;
    },
    reviews() {
      return data.reviews;
    },
    authors() {
      return data.authors;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Server ready at port ${PORT}`);
