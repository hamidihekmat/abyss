import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_ALL_GAMES } from '../apollo/Queries';
import Game from '../components/Game';
import styled from '@emotion/styled';
import { motion, AnimateSharedLayout } from 'framer-motion';

function Home() {
  const { loading, data } = useQuery(GET_ALL_GAMES);
  return (
    <>
      <Head>
        <title>Abyss</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimateSharedLayout>
        <GameList>
          <h2>Upcoming Games</h2>
          <Games>
            {data &&
              data.upcomingGames.map((game) => (
                <Game key={game.id} data={game} />
              ))}
          </Games>
        </GameList>
        <GameList>
          <h2>New Games</h2>
          <Games>
            {data &&
              data.newGames.map((game) => <Game key={game.id} data={game} />)}
          </Games>
        </GameList>
        <GameList>
          <h2>Popular Games</h2>
          <Games>
            {data &&
              data.popularGames.map((game) => (
                <Game key={game.id} data={game} />
              ))}
          </Games>
        </GameList>
      </AnimateSharedLayout>
    </>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 6rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Home;
