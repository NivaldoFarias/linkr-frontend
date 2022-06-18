import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import logo from './../../assets/logo.png';
import DataContext from '../../hooks/DataContext';
import StyledHome from './styles';

export default function Home() {
  const { token } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/timeline');
    }
  }, [token]);

  function buildHomepage() {
    return (
      <header>
        <div className='logo-container'>
          <p className='logo-container__text'>linkr</p>
          <img src={logo} className='logo-container__logo' alt='Linkr logo' />
        </div>
        <p className='motto'>save, share and discover the best links on the web</p>
      </header>
    );
  }

  const homepage = buildHomepage();

  return (
    <StyledHome>
      {homepage}
      <Outlet />
    </StyledHome>
  );
}
