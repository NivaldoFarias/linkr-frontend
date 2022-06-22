import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import MainPageProvider from '../../hooks/MainPageContext';
import DataContext from './../../hooks/DataContext';
import MouseContext from '../../hooks/MouseContext';

import Header from '../../components/Header';
import TrendingNav from '../../components/TrendingNav';
import FollowButton from '../../components/FollowButton';

import { Wrapper, Main, Feed } from './styles';
import Axios from '../../blueprints';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <MainPageProvider>
      <Wrapper onMouseDown={() => setClicking(true)} onMouseUp={() => setClicking(false)}>
        <Header />
        <Main>
          <Feed>
            <Outlet />
          </Feed>
          {width > 600 && (
            <div className='aside-container'>
              <FollowButton />
              <TrendingNav />
            </div>
          )}
        </Main>
      </Wrapper>
    </MainPageProvider>
  );
}
