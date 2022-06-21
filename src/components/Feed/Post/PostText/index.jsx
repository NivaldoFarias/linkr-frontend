import { useContext } from 'react';
import PostContext from '../../../../hooks/PostContext';
import ReactHashtag from '@mdnm/react-hashtag';
import getRandomInt from '../../../../utils/getRandomInt';

export default function PostText() {
  const { post, goToHashtagPage } = useContext(PostContext);

  return (
    <div className='post-header__text'>
      <ReactHashtag
        renderHashtag={(val, i) => (
          <span
            className='hashtag'
            key={getRandomInt(1, 10000)}
            onClick={() => {
              goToHashtagPage(val);
            }}
          >
            {val}
          </span>
        )}
      >
        {post.text}
      </ReactHashtag>
    </div>
  );
}
