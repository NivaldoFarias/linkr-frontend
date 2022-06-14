import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 0 auto;
  margin-top: 160px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 300px;
  border-radius: 16px;
  * {
    color: white;
  }
`;

const Header = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 27px;
  font-weight: 700;
  line-height: 40px;
  padding: 12px 16px;
  border-bottom: ${({ theme }) => theme.styles.defaultBorder};
`;

const Hashtags = styled.div`
  padding: 22px 16px;
  ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', '5px')};
`;

const Hashtag = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: left;
  letter-spacing: 0.05em;
`;

const trendingHashtags = ['react', 'redux', 'nodejs', 'javascript', 'typescript'];

export default function TrendingNav() {
  const hashtags = trendingHashtags.map((hashtag, index) => {
    return <Hashtag key={index}>{`# ${hashtag}`}</Hashtag>;
  });

  return (
    <Wrapper>
      <Header>trending</Header>
      <Hashtags>{hashtags}</Hashtags>
    </Wrapper>
  );
}
