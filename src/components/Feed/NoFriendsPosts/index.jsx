import NoFriendsContainer from './styles/';
import { BsSignpostSplit } from 'react-icons/bs';

export default function NoFriends() {
  return (
    <NoFriendsContainer>
      <BsSignpostSplit />
      <h2>You don't follow anyone yet. Search for new friends!</h2>
    </NoFriendsContainer>
  );
}
