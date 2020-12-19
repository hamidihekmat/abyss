import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/search',
      query: { name: search },
    });
    setSearch('');
  };
  return (
    <StyledNav>
      <h2 onClick={() => router.push('/')}>Abyss</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit" disabled={!search}>
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  min-height: 10vh;
  padding: 3rem 5rem;
  text-align: center;
  h2 {
    font-weight: bold;
    cursor: pointer;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    background: #ff7676;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
    cursor: pointer;
  }
`;

export default Nav;
