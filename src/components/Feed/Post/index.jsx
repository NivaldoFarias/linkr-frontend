import { useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import DataContext from '../../../hooks/DataContext';
import PostContainer from './styles/';
import PostContext from '../../../hooks/PostContex';

import Link from './Link';
import DeleteModal from './DeleteModal';
import EditActions from './EditActions';
import EditPostText from './EditPostText';
import PostText from './PostText';
import Likes from './UserActions/Likes';

export default function Post(props) {
  const { user } = useContext(DataContext);
  const { post, modalIsOpen, isEditingPost, goToUserPage } = useContext(PostContext);

  const leftContainer = buildLeftContainer();
  const postHeader = buildPostHeader();

  return (
    <PostContainer>
      <ReactTooltip type='light' place='bottom' effect='solid' />
      {leftContainer}
      <div className='right-container'>
        {modalIsOpen ? <DeleteModal /> : <></>}
        {postHeader}
        <Link />
      </div>
    </PostContainer>
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

  function buildLeftContainer() {
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
      </div>
    );
  }
}
