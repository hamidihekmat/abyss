import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from '@emotion/styled';
import GameDetails from './GameDetails';

function Game({ data }) {
  const [toggleDetails, setToggleDetails] = useState(false);
  const { name, release, image, id } = data;
  const handleClick = () => {
    setToggleDetails(!toggleDetails);
  };
  return (
    <>
      <StyledGame onClick={handleClick}>
        <h3>{name}</h3>
        <p>{release}</p>
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          layout="responsive"
        />
      </StyledGame>
      {toggleDetails && <GameDetails id={id} handleToggle={handleClick} />}
    </>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    transition: all 400ms;
    &:hover {
      transform: scale(1.2);
      filter: brightness(0.8);
    }
  }
`;

export default Game;
