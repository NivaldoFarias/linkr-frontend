import { useContext } from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import DataContext from './../../hooks/DataContext';
import { Wrapper, Title } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { width } = useContext(DataContext);
  const isMobile = width < 500;
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Title
          onClick={() => {
            navigate('/timeline');
          }}
        >
          linkr
        </Title>
        {!isMobile && <SearchBar />}
        <Navigation />
      </Wrapper>
      {isMobile && <SearchBar />}
    </>
  );
}
