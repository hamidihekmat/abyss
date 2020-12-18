import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    description: String
    release: String!
    rating: Float
    image: String!
    platforms: [Platform!]
    screenShots: [Screenshot!]
  }

  type Platform {
    id: ID!
    name: String!
  }

  type Screenshot {
    id: ID!
    image: String!
    width: Int!
    height: Int!
  }

  type Query {
    getPopularGames(limit: Int): [Game!]
    getUpcomingGames(limit: Int): [Game!]
    getNewGames(limit: Int): [Game!]
    getGame(id: ID!): Game
  }
`;
