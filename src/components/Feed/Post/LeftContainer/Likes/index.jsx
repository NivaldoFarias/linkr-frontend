import { useContext } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import PostContext from '../../../../../hooks/PostContext';
import FeedContext from '../../../../../hooks/FeedContext';

function Likes() {
  const {
    post: {
      id: postId,
      likes: { totalLikes, usersWhoLiked, userHasLiked },
    },
  } = useContext(PostContext);
  const {
    hooks: {
      data: { togglePostLike },
    },
  } = useContext(FeedContext);

  return (
    <div className='left-container__likes' onClick={handleLike}>
      {userHasLiked ? (
        <AiFillHeart className={userHasLiked ? 'red-heart' : ''} />
      ) : (
        <AiOutlineHeart />
      )}
      <div data-tip={likesLabel()} className='left-container__likes__label'>
        <strong>{processLikes()}</strong>
        {processLikesLabel()}
      </div>
    </div>
  );

  async function handleLike() {
    await togglePostLike(postId, userHasLiked);
  }

  function likesLabel() {
    return userHasLiked
      ? totalLikes === 1
        ? 'You'
        : totalLikes < 3
        ? `You and ${usersWhoLiked[0]?.username}`
        : `You, ${usersWhoLiked[0]?.username} and ${totalLikes - 2} other${
            totalLikes - 2 === 1 ? '' : 's'
          }`
      : totalLikes === 1
      ? `${usersWhoLiked[0]?.username}`
      : totalLikes === 2
      ? `${usersWhoLiked[0]?.username} and ${usersWhoLiked[1]?.username}`
      : `${
          usersWhoLiked[0]?.username && usersWhoLiked[1]?.username
            ? `${usersWhoLiked[0]?.username ?? ''}, ${usersWhoLiked[1]?.username ?? ''} and ${
                totalLikes - 2
              }other${totalLikes - 2 === 1 ? '' : 's'}`
            : 'No likes yet'
        }`;
  }

  function processLikesLabel() {
    return totalLikes > 0 ? ` like${totalLikes === 1 ? '' : 's'}` : '';
  }

  function processLikes() {
    return totalLikes > 0 ? `${totalLikes}` : 'No likes yet';
  }
}

export default Likes;
