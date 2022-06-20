import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import TrendingNav from '../../components/TrendingNav';
import DataContext from './../../hooks/DataContext';
import { Wrapper, Main, Feed } from './styles';
import { useNavigate } from 'react-router-dom';
import MouseContext from '../../hooks/MouseContext';
import Axios from '../../blueprints';
import MainPageProvider from '../../hooks/MainPageContext';

export default function MainPage() {
  const { width, token, setUser } = useContext(DataContext);
  const { setClicking } = useContext(MouseContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      Axios.get('/users', config).then((res) => {
        setUser(res.data.user);
      });
    }
  }, [token]);

  return (
    <MainPageProvider>
      <Wrapper onMouseDown={() => setClicking(true)} onMouseUp={() => setClicking(false)}>
        <Header />
        <Main>
          <Feed>
            <Outlet />
          </Feed>
          {width > 600 && <TrendingNav />}
        </Main>
      </Wrapper>
    </MainPageProvider>
  );
}
