import styled from 'styled-components';

const Wrapper = styled.aside`
  margin-top: 100px;
  width: 30%;
  max-width: 360px;
  border-radius: 16px;
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
  max-height: 340px;
  overflow-y: auto;
  padding: 22px 16px;
  width: 100%;
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', '5px')};
`;

const Hashtag = styled.div`
  cursor: pointer;
  text-align: left;
  line-height: 23px;
  letter-spacing: 0.05em;

  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  &.scale-small {
    transform: scale(1);
  }
  &.scale-medium {
    padding-bottom: 2px;
    filter: saturate(1.5);
    font-size: 1.5rem;
  }
  &.scale-large {
    padding-bottom: 5px;
    filter: saturate(2);
    font-size: 2rem;
  }
`;

export { Wrapper, Header, Hashtags, Hashtag };
