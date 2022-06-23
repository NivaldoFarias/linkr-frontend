import { useContext } from 'react';

import FeedContext from '../../../../hooks/FeedContext';
import PostContext from '../../../../hooks/PostContext';

import Comments from './Comments';
import Likes from './Likes';
import Shares from './Shares';

import fallbackAvatar from '../../../../assets/fallback-avatar.png';

function LeftContainer() {
  const {
    post: { userId },
  } = useContext(PostContext);

  const {
    users,
    hooks: { navigate },
  } = useContext(FeedContext);
  const postCreator = users[userId] ?? { username: 'User', imageUrl: fallbackAvatar };

  return (
    <div className='left-container'>
      <img
        className='left-container__image'
        alt='post creator user avatar'
        onClick={() => {
          navigate.goToUserPage(postCreator.id);
        }}
        src={postCreator.imageUrl}
      />
      <Likes />
      <Comments />
      <Shares />
    </div>
  );
}

export default LeftContainer;
