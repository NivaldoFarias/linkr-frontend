import { useContext } from 'react';
import FeedContext from '../../../../../hooks/FeedContext';
import PostContext from './../../../../../hooks/PostContext';

export default function PostText() {
  const {
    post: { text },
  } = useContext(PostContext);
  const {
    hooks: {
      data: { goToHashtagPage },
    },
  } = useContext(FeedContext);

  const textWithHashtags = textBuilder(text);

  return <div className='post-header__text'>{textWithHashtags}</div>;

  function textBuilder(text) {
    const words = text.split(' ');
    const elements = words.map((w, index) => {
      if (w[0] === '#') {
        return (
          <span
            className='hashtag'
            key={index}
            onClick={() => {
              goToHashtagPage(w);
            }}
          >
            {`${w} `}
          </span>
        );
      } else {
        return `${w} `;
      }
    });
    return <p>{elements}</p>;
  }
}
