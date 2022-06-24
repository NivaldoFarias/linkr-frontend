import { useContext } from 'react';

import PostContext from '../../../../hooks/PostContext';
import DataContext from '../../../../hooks/DataContext';
import FeedContext from '../../../../hooks/FeedContext';

import EditPostText from './EditPostText';
import EditActions from './EditActions';
import DeleteModal from './DeleteModal';
import PostText from './PostText';
import Link from './Link';

function RightContainer() {
  const { user } = useContext(DataContext);
  const {
    users,
    hooks: {
      navigate: { goToUserPage },
    },
  } = useContext(FeedContext);
  const {
    share: { id: shareId, userId: shareUserId },
    post: { id: postId, userId, createdAt },
    modalIsOpen,
    isEditingPost,
  } = useContext(PostContext);

  const postCreator = {
    userId,
    username: users[userId].username,
  };

  const postHeader = buildPostHeader();

  return (
    <div className='right-container'>
      {modalIsOpen ? <DeleteModal /> : <></>}
      {postHeader}
      <Link />
    </div>
  );

  function buildPostHeader() {
    return (
      <div className='post-header'>
        <p>{shareUserId === userId ? 'original' : 'RESHARE'}</p>
        <div className='post-header__username'>
          <p
            onClick={() => {
              goToUserPage(userId);
            }}
          >
            {postCreator.username}
          </p>
          {postCreator.userId === user.id ? <EditActions /> : <></>}
        </div>
        {isEditingPost ? <EditPostText /> : <PostText />}
      </div>
    );
  }
}

export default RightContainer;
