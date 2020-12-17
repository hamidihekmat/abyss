import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    getPopularGames(limit: Int): String
    getUpcomingGames(limit: Int): String
    getNewGames(limit: Int): String
  }
`;
