import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
        <p className='logotype'>linkr</p>
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
