import { useContext } from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import DataContext from './../../hooks/DataContext';
import { Wrapper, Title } from './styles';

export default function Header() {
  const { width } = useContext(DataContext);
  const isMobile = width < 500;

  return (
    <>
      <Wrapper>
        <Title>linkr</Title>
        {!isMobile && <SearchBar />}
        <Navigation />
      </Wrapper>
      {isMobile && <SearchBar />}
    </>
  );
}
