import { games, reviews, authors } from "../db/db.js"

let _reviews = [...reviews]
let _games = [...games]
let _authors = [...authors]

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
    Mutation: {
        deleteReview: (_, args) => {
            _reviews = reviews.filter(review => review.id !== args.id);
            return _reviews;
        },
        deleteGame: (_, args) => {
            _games = games.filter(game => game.id !== args.id);
            return _games;
        },
        deleteAuthor: (_, args) => {
            _authors = authors.filter(author => author.id !== args.id);
            return _authors;
        },
        createReview: (_, args) => {
            const newReview = {
                id: String(reviews.length + 1),
                rating: args.rating,
                content: args.content,
                author_id: args.author_id,
                game_id: args.game_id,
            }
            reviews.push(newReview);
            return newReview;
        },
        createGame: (_, args) => {
            const newGame = {
                id: String(games.length + 1),
                title: args.title,
                platform: args.platform,
            }
            games.push(newGame);
            return newGame;
        },
        createAuthor: (_, args) => {
            const newAuthor = {
                id: String(authors.length + 1),
                name: args.name,
                verified: args.verified,
            }
            authors.push(newAuthor);
            return newAuthor;
        },
        updateReview: (_, args) => {
            const review = reviews.find(review => review.id === args.id);
            if (review) {
                review.rating = args.rating;
                review.content = args.content;
                review.author_id = args.author_id;
                review.game_id = args.game_id;
            }
            return review;
        },
    }
}