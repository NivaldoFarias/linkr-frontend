import { useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import DataContext from '../../../hooks/DataContext';
import PostContainer from './styles/';
import PostContext from '../../../hooks/PostContext';

import LeftContainer from './LeftContainer';
import Link from './Link';
import DeleteModal from './DeleteModal';
import EditActions from './EditActions';
import EditPostText from './EditPostText';
import PostText from './PostText';

export default function Post() {
  const { user } = useContext(DataContext);
  const { post, modalIsOpen, isEditingPost, goToUserPage } = useContext(PostContext);

  const postHeader = buildPostHeader();

  return (
    <PostContainer>
      <ReactTooltip type='light' place='bottom' effect='solid' />
      <LeftContainer />
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
}
