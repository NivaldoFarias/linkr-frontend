import styled from 'styled-components';

const Wrapper = styled.aside`
  margin-top: 100px;
  height: 460px;
  width: 30%;
  max-width: 360px;

  border-radius: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.div`
  padding: 12px 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  font-weight: 700;
  line-height: 40px;

  border-bottom: ${({ theme }) => theme.styles.defaultBorder};
`;

const Hashtags = styled.div`
  padding: 22px 16px;
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'flex-start', '5px')};
`;

const Hashtag = styled.div`
  cursor: pointer;
  text-align: left;
  line-height: 23px;
  letter-spacing: 0.05em;

  font-size: 1.1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export { Wrapper, Header, Hashtags, Hashtag };
