import { Outlet } from 'react-router-dom';
import StyledHome from './styles';

export default function Home() {
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
