import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import TokenContext from '../../hooks/TokenContext';
import StyledHome from './styles';


export default function Home() {

  const { token } = useContext(TokenContext);

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
