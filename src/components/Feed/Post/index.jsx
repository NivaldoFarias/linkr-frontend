import ReactTooltip from 'react-tooltip';

import PostContainer, { PostWrapper, RepostLabel, ContentContainer } from './styles/';
import RightContainer from './RightContainer/';
import LeftContainer from './LeftContainer/';
import CommentSection from './CommentSection';
import { useContext } from 'react';
import PostContext from '../../../hooks/PostContext';
import DataContext from '../../../hooks/DataContext';
import FeedContext from '../../../hooks/FeedContext';

export default function Post() {
  const { isCommentSectionOpen } = useContext(PostContext);
  const { user } = useContext(DataContext);
  const { users } = useContext(FeedContext);
  const {
    share: { userId: shareUserId },
    post: { userId: creatorUserId },
  } = useContext(PostContext);

  const showReshareLabel = creatorUserId !== shareUserId;
  const reshareByUser = shareUserId === user.id;
  const reshareUsername = reshareByUser ? 'you' : users[shareUserId].username;

  const reshareLabel = showReshareLabel ? (
    <RepostLabel>
      <div>
        Re-post by <strong>{reshareUsername}</strong>
      </div>
    </RepostLabel>
  ) : (
    <></>
  );
  return (
    <PostWrapper>
      <PostContainer className={isCommentSectionOpen ? 'open-comments' : ''}>
        {reshareLabel}
        <ContentContainer>
          <ReactTooltip type='light' place='bottom' effect='solid' />
          <LeftContainer />
          <RightContainer />
        </ContentContainer>
      </PostContainer>
      <CommentSection />
    </PostWrapper>
  );
}
