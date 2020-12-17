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
    getUsers: async () => {
      try {
        const users = await axios.get('https://api.github.com/users');
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
