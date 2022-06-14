import { Outlet } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h1>Logged</h1>
      <Outlet />
    </div>
  );
}
