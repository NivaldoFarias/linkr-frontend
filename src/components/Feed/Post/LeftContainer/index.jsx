import { useContext } from 'react';

import DataContext from '../../../../hooks/DataContext';
import FeedContext from '../../../../hooks/FeedContext';
import PostContext from '../../../../hooks/PostContext';

import Comments from './Comments';
import Likes from './Likes';
import Shares from './Shares';

function LeftContainer() {
  const { user } = useContext(DataContext);
  const {
    postData: { userId },
    goToUserPage,
  } = useContext(PostContext);
  const {
    feedData: { users },
  } = useContext(FeedContext);
  const postCreator = users[userId];

  return (
    <div className='left-container'>
      <img
        className='left-container__image'
        alt='post creator user avatar'
        onClick={() => {
          goToUserPage(postCreator.id);
        }}
        src={postCreator.imageUrl}
      />
      <Likes />
      <Comments />
      {userId !== user.id ? <Shares /> : <></>}
    </div>
  );
}

export default LeftContainer;
