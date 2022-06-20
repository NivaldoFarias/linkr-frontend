import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Header, Hashtags, Hashtag } from './styles';
import DataContext from '../../hooks/DataContext';
import Axios from '../../blueprints';

export default function TrendingNav() {
  const [hashtags, setHashtags] = useState(null);

  const { token } = useContext(DataContext);

  useEffect(() => {
    Axios.get('hashtags/trending', token)
      .then(({ data }) => {
        setHashtags(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          className={scaleHashtag(Number(hashtag.likes_count), Number(hashtag.posts_count))}
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

  function scaleHashtag(likesCount, postsCount) {
    const weigthedValue = likesCount * 2 + postsCount * 1.3;

    if (weigthedValue >= 0 && weigthedValue < 5) {
      return 'scale-small';
    } else if (weigthedValue > 5 && weigthedValue < 15) {
      return 'scale-medium';
    } else {
      return 'scale-large';
    }
  }
}
