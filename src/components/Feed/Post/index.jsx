import ReactTooltip from 'react-tooltip';

import PostContainer, { PostWrapper } from './styles/';
import RightContainer from './RightContainer/';
import LeftContainer from './LeftContainer/';
import CommentSection from './CommentSection';

export default function Post() {
  return (
    <PostWrapper>
      <PostContainer>
        <ReactTooltip type='light' place='bottom' effect='solid' />
        <LeftContainer />
        <RightContainer />
      </PostContainer>
      <CommentSection />
    </PostWrapper>
  );
}
