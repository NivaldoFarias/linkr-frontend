import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import TrendingNav from '../components/TrendingNav';
import DataContext from '../hooks/DataContext';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'center', '0px')};
`;

const Main = styled.main`
  flex: 1 1 auto;
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', '25px')};
`;

const Feed = styled.div`
  width: 100%;
  max-width: 611px;
  flex: 0 0 auto;
`;

export default function MainPage() {
  const { width } = useContext(DataContext);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Feed>
          <Outlet />
        </Feed>
        {width > 600 ? <TrendingNav /> : <></>}
      </Main>
    </Wrapper>
  );
}
