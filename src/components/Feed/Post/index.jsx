import ReactTooltip from 'react-tooltip';

import PostContainer, { PostWrapper } from './styles/';
import RightContainer from './RightContainer/';
import LeftContainer from './LeftContainer/';
import CommentSection from './CommentSection';
import { useContext } from 'react';
import PostContext from '../../../hooks/PostContext';

export default function Post() {
  const { isCommentSectionOpen } = useContext(PostContext);

  return (
    <PostWrapper>
      <PostContainer className={isCommentSectionOpen ? 'open-comments' : ''}>
        <ReactTooltip type='light' place='bottom' effect='solid' />
        <LeftContainer />
        <RightContainer />
      </PostContainer>
      <CommentSection />
    </PostWrapper>
  );
}
