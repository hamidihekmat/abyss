import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GET_GAME } from '../apollo/Queries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

function GameDetails({ id, handleToggle }) {
  const { loading, data } = useQuery(GET_GAME, {
    variables: {
      id,
    },
  });
  return (
    <CardShadow onClick={handleToggle}>
      {data && (
        <Detail>
          <Stats>
            <div className="rating">
              <h3>{data.getGame.name}</h3>
              <p>Rating: {data.getGame.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {data.getGame.platforms.map((platform) => (
                  <h3 key={platform.id}>{platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <Image
              src={data.getGame.image}
              alt={data.getGame.name}
              width={800}
              height={600}
              layout="responsive"
            />
          </Media>
          <Description>
            <p>{data.getGame.description}</p>
          </Description>
          <div className="gallery">
            {data.getGame.screenShots.map((img) => (
              <Image
                key={img.id}
                src={img.image}
                width={img.width}
                height={img.height}
                layout="responsive"
                alt="game"
              />
            ))}
          </div>
        </Detail>
      )}
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  cursor: pointer;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled.div`
  margin: 3rem 0rem;
`;

export default GameDetails;
