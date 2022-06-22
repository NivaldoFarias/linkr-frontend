import { useContext, useEffect, useState } from 'react';

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
    feedData: { users },
  } = useContext(FeedContext);
  const {
    postData: { userId },
    modalIsOpen,
    isEditingPost,
    goToUserPage,
  } = useContext(PostContext);

  const [processedData, setProcessedData] = useState({});

  useEffect(() => {
    setProcessedData({
      userId: userId,
      username: users[userId].username,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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
        <div className='post-header__username'>
          <p
            onClick={() => {
              goToUserPage(user.id);
            }}
          >
            {processedData.username}
          </p>
          {processedData.userId === user.id ? <EditActions /> : <></>}
        </div>
        {isEditingPost ? <EditPostText /> : <PostText />}
      </div>
    );
  }
}

export default RightContainer;
