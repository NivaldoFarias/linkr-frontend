import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import TrendingNav from '../../components/TrendingNav';
import DataContext from './../../hooks/DataContext';
import { Wrapper, Main, Feed } from './styles';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const { width, token } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Feed>
          <Outlet />
        </Feed>
        {width > 600 && <TrendingNav />}
      </Main>
    </Wrapper>
  );
}
