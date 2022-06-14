import { Outlet } from 'react-router-dom';
import StyledHome from './styles';

export default function Home() {
  return (
    <StyledHome>
      <h1>Home</h1>
      <Outlet />
    </StyledHome>
  );
}
