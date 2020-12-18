import { ApolloError } from 'apollo-server-micro';

export const resolvers = {
  Query: {
    search: async (_, { name }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      let data;
      try {
        data = await gamesAPI.searchGames(name);
      } catch (error) {
        throw new ApolloError('Fetch Failed');
      }
      const games = data.map((game) => ({
        id: game.id,
        name: game.name,
        release: game.released,
        image: game.background_image,
      }));
      return games;
    },
    game: async (_, { id }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      let data;
      try {
        data = await gamesAPI.getGame(id);
      } catch (error) {
        throw new ApolloError('Fetch Failed');
      }
      const game = {
        id,
        name: data.name,
        description: data.description_raw,
        rating: data.rating,
        image: data.background_image,
        platforms: data.platforms.map(({ platform }) => ({
          id: platform.id,
          name: platform.name,
        })),
        screenShots: data.screenShots.map((img) => ({
          id: img.id,
          image: img.image,
          width: img.width,
          height: img.height,
        })),
      };
      return game;
    },
    newGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      let data;
      try {
        data = await gamesAPI.newGames(limit);
      } catch (error) {
        throw new ApolloError('Fetch Failed');
      }
      const games = data.map((game) => ({
        id: game.id,
        name: game.name,
        release: game.released,
        image: game.background_image,
      }));
      return games;
    },
    upcomingGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      let data;
      try {
        data = await gamesAPI.upcomingGames(limit);
      } catch (error) {
        throw new ApolloError('Fetch Failed');
      }
      const games = data.map((game) => ({
        id: game.id,
        name: game.name,
        release: game.released,
        image: game.background_image,
      }));
      return games;
    },
    popularGames: async (_, { limit }, { dataSources }) => {
      const { gamesAPI } = dataSources;
      let data;
      try {
        data = await gamesAPI.popularGames(limit);
      } catch (error) {
        throw new ApolloError('Fetch Failed');
      }
      const games = data.map((game) => ({
        id: game.id,
        name: game.name,
        release: game.released,
        image: game.background_image,
        // platforms: game.platforms.map(({ platform }) => ({
        //   id: platform.id,
        //   name: platform.name,
        // })),
      }));
      return games;
    },
  },
};
