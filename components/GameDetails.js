import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GET_GAME } from '../apollo/Queries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

function getIcon(platform) {
  switch (platform) {
    case 'PlayStation 4':
      return '/img/playstation.svg';
    case 'PlayStation 5':
      return '/img/playstation.svg';
    case 'Xbox One':
      return '/img/xbox.svg';
    case 'PC':
      return '/img/steam.svg';
    case 'Nintendo Switch':
      return '/img/nintendo.svg';
    case 'iOS':
      return '/img/apple.svg';
    default:
      return '/img/gamepad.svg';
  }
}

function GameDetails({ id, handleToggle }) {
  const { loading, data } = useQuery(GET_GAME, {
    variables: {
      id,
    },
  });
  return (
    <>
      {!loading && (
        <CardShadow onClick={handleToggle}>
          {data && (
            <Detail layoutId={id}>
              <Stats>
                <div className="rating">
                  <h3>{data.game.name}</h3>
                  <p>Rating: {data.game.rating}</p>
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {data.game.platforms.map((platform) => (
                      <Image
                        src={getIcon(platform.name)}
                        width={'25px'}
                        height={'25px'}
                        alt={platform.name}
                        key={platform.id}
                      />
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <Image
                  src={data.game.image}
                  alt={data.game.name}
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </Media>
              <Description>
                <p>{data.game.description}</p>
              </Description>
              <div className="gallery">
                {data.game.screenShots.map((img) => (
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
      )}
    </>
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
  width: 20vw;
  justify-content: space-evenly;
  image {
    /* margin-left: 3rem; */
    display: block;
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
