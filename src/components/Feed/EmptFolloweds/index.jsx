import EmptyFollowedContainer from './styles';
import { BsSignpostSplit } from 'react-icons/bs';

export default function EmptyFolloweds() {
  return (
    <EmptyFollowedContainer>
      <BsSignpostSplit />
      <h2>No posts found from your friends</h2>
    </EmptyFollowedContainer>
  );
}
