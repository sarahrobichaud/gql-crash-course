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
    game(_, args) {
      return data.games.find((i) => i.id === args.id);
    },
    reviews() {
      return data.reviews;
    },
    review(_, args) {
      return data.reviews.find((i) => i.id === args.id);
    },
    authors() {
      return data.authors;
    },
    author(_, args) {
      return data.authors.find((i) => i.id === args.id);
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
