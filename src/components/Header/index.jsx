import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import { useContext } from 'react';
import DataContext from '../../hooks/DataContext';

const Wrapper = styled.main`
  height: 72px;
  width: 100%;
  ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', '0px')};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  * {
    color: white;
  }
`;

export default function Header() {
  const { width } = useContext(DataContext);
  const isMobile = width < 500;

  return (
    <>
      <Wrapper>
        <Logo />
        {!isMobile ? <SearchBar /> : <></>}
        <Navigation />
      </Wrapper>
      {!isMobile ? <></> : <SearchBar />}
    </>
  );
}
