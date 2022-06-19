import styled from 'styled-components';

const Wrapper = styled.aside`
  margin-top: 100px;
  width: 30%;
  max-width: 240px;
  color: white;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  padding: 12px 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 40px;

  border-bottom: ${({ theme }) => theme.styles.defaultBorder};
`;

const Hashtags = styled.div`
  padding: 22px 16px;
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'flex-start', '5px')};
`;

const Hashtag = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: left;
  letter-spacing: 0.05em;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export { Wrapper, Header, Hashtags, Hashtag };
