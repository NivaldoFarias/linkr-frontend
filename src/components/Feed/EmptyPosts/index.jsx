import EmptyPostsContainer from './styles/';
import { BsSignpostSplit } from 'react-icons/bs';

export default function EmptyPosts() {
  return (
    <EmptyPostsContainer>
      <BsSignpostSplit />
      <h2>There are no posts yet</h2>
    </EmptyPostsContainer>
  );
}
