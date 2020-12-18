import { gql } from '@apollo/client';

export const GET_ALL_GAMES = gql`
  query {
    newGames {
      id
      name
      release
      image
    }
    popularGames {
      id
      name
      release
      image
    }
    upcomingGames {
      id
      name
      release
      image
    }
  }
`;

export const GET_GAME = gql`
  query GETGAME($id: ID!) {
    game(id: $id) {
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
