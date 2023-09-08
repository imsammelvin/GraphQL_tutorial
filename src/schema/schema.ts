const typeDefs = `#graphql

type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    contant: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}

type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}

type Mutation {
    deleteReview(id: ID!): [Review]
    deleteGame(id: ID!): [Game]
    deleteAuthor(id: ID!): [Author]
    createReview(rating: Int!, content: String!, author_id: ID!, game_id: ID!): Review
    createGame(title: String!, platform: [String!]!): Game
    createAuthor(name: String!, verified: Boolean!): Author
    updateReview(id: ID!, rating: Int!, content: String!, author_id: ID!, game_id: ID!): Review
}




`

// int, float, string, boolean, ID
// ! means required
// reviews: [Review!] means array of reviews that are required and this means that there can be a author with no reviews
export default typeDefs;