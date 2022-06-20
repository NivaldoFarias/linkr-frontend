import { useContext } from 'react';
import Navigation from './Navigation';
import DataContext from './../../hooks/DataContext';

import { Wrapper, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from './../../assets/logo.png';

export default function Header() {
  const { width } = useContext(DataContext);
  const isMobile = width < 500;
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <div className='logo-container' onClick={navigateToTimeline}>
          <img src={logo} alt='Linkr logo' onClick={navigateToTimeline} />
          <Title>linkr</Title>
        </div>
        {!isMobile && <SearchBar />}
        <Navigation />
      </Wrapper>
      {isMobile && <SearchBar />}
    </>
  );

  function navigateToTimeline() {
    navigate('/timeline');
  }
}
