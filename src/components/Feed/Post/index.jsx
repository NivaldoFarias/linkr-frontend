import ReactTooltip from 'react-tooltip';

import PostContainer from './styles/';
import RightContainer from './RightContainer/';
import LeftContainer from './LeftContainer/';

export default function Post() {
  return (
    <PostContainer>
      <ReactTooltip type='light' place='bottom' effect='solid' />
      <LeftContainer />
      <RightContainer></RightContainer>
    </PostContainer>
  );
}
