import { useContext } from 'react';
import PostContext from '../../../../hooks/PostContex';
import ReactHashtag from '@mdnm/react-hashtag';

export default function PostText() {
  const { post, goToHashtagPage } = useContext(PostContext);

  return (
    <div className='post-header__text'>
      <ReactHashtag
        renderHashtag={(val, i) => (
          <span
            className='hashtag'
            key={i}
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
