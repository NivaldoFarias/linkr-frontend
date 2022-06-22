import { useContext } from 'react';

import PostContext from '../../../../hooks/PostContext';
import DataContext from '../../../../hooks/DataContext';

import EditPostText from './EditPostText';
import EditActions from './EditActions';
import DeleteModal from './DeleteModal';
import PostText from './PostText';
import Link from './Link';

function RightContainer() {
  const { user } = useContext(DataContext);
  const { post, modalIsOpen, isEditingPost, goToUserPage } = useContext(PostContext);

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
            {post.username}
          </p>
          {post.userId === user.id ? <EditActions /> : <></>}
        </div>
        {isEditingPost ? <EditPostText /> : <PostText />}
      </div>
    );
  }
}

export default RightContainer;
