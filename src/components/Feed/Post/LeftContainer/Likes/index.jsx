import { useContext } from 'react';
import PostContext from '../../../../../hooks/PostContext';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Axios from '../../../../../blueprints';

function Likes() {
  const { post, isLiked, setIsLiked, updatePostData, CONFIG, handleError } =
    useContext(PostContext);

  return (
    <div className='left-container__likes' onClick={likeButtonClicked}>
      {isLiked ? <AiFillHeart className={isLiked ? 'red-heart' : ''} /> : <AiOutlineHeart />}
      <div data-tip={likesLabel()} className='left-container__likes__label'>
        <strong>{processLikes()}</strong>
        {processLikesLabel()}
      </div>
    </div>
  );

  async function likeButtonClicked() {
    const tryToLike = !isLiked;
    setIsLiked(tryToLike);

    const url = `/posts/${post.id}/${tryToLike ? '' : 'un'}like`;
    try {
      await Axios.post(url, {}, CONFIG);
      await updatePostData();
    } catch (error) {
      handleError(error);
    }
  }

  function likesLabel() {
    const { userHasLiked, totalLikes, usersWhoLiked } = post;

    return userHasLiked
      ? totalLikes === 1
        ? 'You'
        : totalLikes < 3
        ? `You and ${usersWhoLiked[0]?.username}`
        : `You, ${usersWhoLiked[0]?.username} and other ${totalLikes - 2}`
      : totalLikes === 1
      ? `${usersWhoLiked[0]?.username}`
      : totalLikes === 2
      ? `${usersWhoLiked[0]?.username} and ${usersWhoLiked[1]?.username}`
      : `${
          usersWhoLiked[0]?.username && usersWhoLiked[1]?.username
            ? `${usersWhoLiked[0]?.username ?? ''}, ${usersWhoLiked[1]?.username ?? ''} and other ${
                totalLikes - 2
              }`
            : 'No likes yet'
        }`;
  }

  function processLikesLabel() {
    return post.totalLikes > 0 ? ` like${post.totalLikes === 1 ? '' : 's'}` : '';
  }

  function processLikes() {
    return post.totalLikes > 0 ? `${post.totalLikes}` : 'No likes yet';
  }
}

export default Likes;
