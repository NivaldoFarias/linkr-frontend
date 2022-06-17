import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import TrendingNav from '../../components/TrendingNav';
import DataContext from '../../contexts/DataContext';
import { Wrapper, Main, Feed } from './styles';
import TokenContext from '../../hooks/TokenContext';
import { useNavigate } from 'react-router-dom';


export default function MainPage() {
  const { width } = useContext(DataContext);
  const { token, setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
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
