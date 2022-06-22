import { useContext } from 'react';
import PostContext from '../../../../../hooks/PostContext';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Axios from '../../../../../blueprints';

function Likes() {
  const {
    postData: {
      id: postId,
      likes: { totalLikes, usersWhoLiked, userHasLiked },
    },
    updatePostData,
    CONFIG,
    handleError,
  } = useContext(PostContext);

  return (
    <div className='left-container__likes' onClick={likeButtonClicked}>
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

  async function likeButtonClicked() {
    const tryToLike = !userHasLiked;
    const url = `/posts/${postId}/${tryToLike ? '' : 'un'}like`;
    try {
      await Axios.post(url, {}, CONFIG);
      await updatePostData();
    } catch (error) {
      handleError();
    }
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