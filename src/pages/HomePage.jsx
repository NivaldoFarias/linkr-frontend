import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Outlet />
    </div>
  );
}
