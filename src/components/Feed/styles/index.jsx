import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'flex-start', '24px')};

  width: 100%;
  margin-top: 38px;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'flex-start', 'initial')};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  width: 100%;

  font-size: 3.5rem;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 2px;

  color: ${({ theme }) => theme.colors.primary}; ;
`;

const UserThumbnail = styled.img`
  ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', 'initial')};
  margin-right: 20px;
  height: 50px;
  width: 50px;

  object-fit: cover;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gradient};
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '30px')};
  margin-bottom: 100px;
  padding: 36px 24px;

  border-left: ${({ theme }) => theme.styles.defaultBorder};
  border-right: ${({ theme }) => theme.styles.defaultBorder};

  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.altTertiary} 0%,
    ${({ theme }) => theme.colors.gradient} 3%,
    ${({ theme }) => theme.colors.gradient} 97%,
    ${({ theme }) => theme.colors.altTertiary} 100%
  );
  background-color: ${({ theme }) => theme.colors.gradient};
`;

const Posts = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '16px')};
`;

export { Wrapper, Header, Title, UserThumbnail, Content, Posts };
