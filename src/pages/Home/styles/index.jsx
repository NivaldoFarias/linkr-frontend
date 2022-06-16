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
    box-shadow: 0px -4px 4px rgba(255, 255, 255, 0.251);

    .logotype {
      font-size: 5.7rem;
      line-height: 0.8;
      letter-spacing: 4px;
      font-family: ${({ theme }) => theme.fonts.logotype};
    }
    .motto {
      width: 90%;

      line-height: 1.5;
      font-weight: 500;
      font-size: 1.4rem;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.primary};
    }
  }
`;

export default StyledHome;
