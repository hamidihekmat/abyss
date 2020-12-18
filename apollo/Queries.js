import { gql } from '@apollo/client';

export const GET_ALL_GAMES = gql`
  query {
    getNewGames {
      id
      name
      release
      image
    }
    getPopularGames {
      id
      name
      release
      image
    }
    getUpcomingGames {
      id
      name
      release
      image
    }
  }
`;

export const GET_GAME = gql`
  query GETGAME($id: ID!) {
    getGame(id: $id) {
      id
      name
      image
      rating
      description
      screenShots {
        id
        image
        width
        height
      }
      platforms {
        id
        name
      }
    }
  }
`;
