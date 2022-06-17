import styled from 'styled-components';

const Wrapper = styled.aside`
  margin-top: 160px;
  height: 460px;
  width: 30%;
  max-width: 360px;

  color: white;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  padding: 12px 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 27px;
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
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: left;
  letter-spacing: 0.05em;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { Wrapper, Header, Hashtags, Hashtag };
