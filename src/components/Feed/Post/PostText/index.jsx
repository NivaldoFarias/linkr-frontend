import ReactHashtag from '@mdnm/react-hashtag';
import { useNavigate } from 'react-router-dom';
import getRandomInt from '../../../../utils/getRandomInt';

function PostText({ post }) {
  const navigate = useNavigate();

  return (
    <div className='post-header__text'>
      <ReactHashtag
        renderHashtag={(val) => (
          <span
            className='hashtag'
            key={Number(post.id) * getRandomInt(1, 10000)}
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

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '');
    navigate(`/hashtag/${cleanHashtag}`);
  }
}

export default PostText;
