import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import Game from '../components/Game';
import { SEARCH_GAME } from '../apollo/Queries';

function search() {
  const router = useRouter();
  const { name } = router.query;
  const { data } = useQuery(SEARCH_GAME, {
    variables: {
      name,
    },
  });
  return (
    <GameList>
      <h2>Searched Games</h2>
      <Games>
        {data && data.search.map((game) => <Game key={game.id} data={game} />)}
      </Games>
    </GameList>
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

export default search;
