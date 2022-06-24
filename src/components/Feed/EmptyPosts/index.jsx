import EmptyPostsContainer from './styles/';
import { BsSignpostSplit } from 'react-icons/bs';

export default function EmptyPosts(props) {
  const { message } = props;
  return (
    <EmptyPostsContainer>
      <BsSignpostSplit />
      <h2>{message}</h2>
    </EmptyPostsContainer>
  );
}
