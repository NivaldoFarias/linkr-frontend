import { useContext } from 'react';
import PostContext from '../../../../hooks/PostContext';
import Comments from './Comments';
import Likes from './Likes';
import Shares from './Shares';

function LeftContainer() {
  const { post, goToUserPage } = useContext(PostContext);

  return (
    <div className='left-container'>
      <img
        className='left-container__image'
        alt='post creator user avatar'
        onClick={() => {
          goToUserPage(post.id);
        }}
        src={post.userPictureUrl}
      />
      <Likes />
      <Comments />
      <Shares />
    </div>
  );
}

export default LeftContainer;
