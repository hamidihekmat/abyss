import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
    getPopularGames(limit: Int): String
    getUpcomingGames(limit: Int): String
    getNewGames(limit: Int): String
  }
`;
