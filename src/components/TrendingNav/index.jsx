import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [hashtags, setHashtags] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/hashtags/trending')
      .then(({ data }) => {
        setHashtags(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const onClickHandler = (hashtag) => {
    navigate(`/hashtag/${hashtag}`);
  };

  const hashtagsElements = hashtags ? (
    hashtags.map((hashtag, index) => {
      return (
        <Hashtag
          onClick={() => {
            onClickHandler(hashtag.name);
          }}
          key={index}
        >{`# ${hashtag.name}`}</Hashtag>
      );
    })
  ) : (
    <></>
  );

  return (
    <Wrapper>
      <Header>trending</Header>
      <Hashtags>{hashtagsElements}</Hashtags>
    </Wrapper>
  );
}
