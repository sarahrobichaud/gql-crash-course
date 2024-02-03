import data from "./_data.js";
export const resolvers = {
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
  Game: {
    reviews(parent) {
      return data.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return data.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return data.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return data.games.find((g) => g.id === parent.game_id);
    },
  },
};
