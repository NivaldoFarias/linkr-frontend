import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import TrendingNav from '../../components/TrendingNav';
import DataContext from '../../contexts/DataContext';
import { Wrapper, Main, Feed } from './styles';

export default function MainPage() {
  const { width } = useContext(DataContext);

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
