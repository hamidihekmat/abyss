import axios from 'axios';

export const resolvers = {
  Query: {
    getNewGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      const data = await gamesAPI.newGames(limit);
      console.log(data);
      return null;
    },
    getUpcomingGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      const data = await gamesAPI.upcomingGames(limit);
      console.log(data);
      return null;
    },
    getPopularGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      const data = await gamesAPI.popularGames(limit);
      console.log(data);
      return null;
    },
  },
};
