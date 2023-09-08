import { games, reviews, authors } from "../db/db.js"

export const resolvers = {
    Query: {
        games: () => games,
        authors: () => authors,
        reviews: () => reviews,
        review: (_, args) => reviews.find(review => review.id === args.id),
        game: (_, args) => games.find(game => game.id === args.id),
        author: (_, args) => authors.find(author => author.id === args.id),
    },
    Game: {
        reviews: (parent) => reviews.filter(review => review.game_id === parent.id),
    },
    Review: {
        author: (parent) => authors.find(author => author.id === parent.author_id),
        game: (parent) => games.find(game => game.id === parent.game_id),
    },
}