import styled from 'styled-components';

const StyledHome = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'space-between', 'center', 'initial')};

  height: 100vh;
  width: 100vw;

  color: ${({ theme }) => theme.colors.altTertiary};
  background-color: ${({ theme }) => theme.colors.primary};

  header {
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', 'initial')};
    padding: 30px 60px;
    height: fit-content;
    width: 100%;

    .logo-container {
      ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};
      height: fit-content;
      width: 100%;
      max-width: 305px;

      &__text {
        font-size: 5.5rem;
        line-height: 0.8;
        letter-spacing: 4px;
        font-family: ${({ theme }) => theme.fonts.logotype};
      }
      &__logo {
        width: 80px;
      }
    }
    .motto {
      max-width: 290px;
      width: 90%;

      line-height: 1.5;
      font-weight: 500;
      font-size: 1.4rem;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.primary};
    }
  }

  @media screen and (min-width: 750px) and (max-width: 950px) {
    padding-left: 20px !important;
  }
  @media screen and (min-width: 750px) {
    ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};

    padding-left: 60px;

    header {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', '10px')};
      padding-bottom: 200px;

      .logo-container {
        max-width: 430px;

        &__text {
          padding-bottom: 10px;
          align-self: flex-end;
          font-size: 8rem;
        }
        &__logo {
          width: 140px;
        }
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
