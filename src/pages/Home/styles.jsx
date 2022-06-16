import styled from 'styled-components';

const StyledHome = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'space-between', 'center', 'initial')};

  height: 100vh;
  width: 100vw;

  color: white;
  background-color: ${({ theme }) => theme.colors.background};

  header {
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', 'initial')};
    padding: 30px 60px;
    height: fit-content;
    width: 100%;

    .logotype {
      font-size: 5.7rem;
      line-height: 0.8;
      letter-spacing: 4px;
      font-family: ${({ theme }) => theme.fonts.logotype};
    }
    .motto {
      max-width: 315px;
      width: 90%;

      line-height: 1.5;
      font-weight: 500;
      font-size: 1.4rem;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.primary};
    }
  }

  @media screen and (min-width: 750px) {
    ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};

    header {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', 'initial')};
      padding-bottom: 200px;

      .logotype {
        font-size: 8rem;
      }
      .motto {
        max-width: 430px;
        font-size: 2.5rem;
        text-align: left;
      }
    }
  }
`;

export default StyledHome;
