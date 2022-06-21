import { useContext } from 'react';
import PostContext from '../../../../hooks/PostContext';
import ReactHashtag from '@mdnm/react-hashtag';
import getRandomInt from '../../../../utils/getRandomInt';

export default function PostText() {
  const { post, goToHashtagPage } = useContext(PostContext);
  const { text } = post;

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
