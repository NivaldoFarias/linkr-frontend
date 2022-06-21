import { useContext } from 'react';
import PostContext from '../../../../../hooks/PostContex';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Axios from '../../../../../blueprints';

export default function Likes() {
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
    console.log(tryToLike ? 'curtir' : 'descurtir');
    const url = `/posts/${post.id}/${tryToLike ? '' : 'un'}like`;
    try {
      console.log(url);
      await Axios.post(url, {}, CONFIG);
      await updatePostData();
    } catch (error) {
      handleError(error);
    }
  }

  function likesLabel() {
    const { userHasLiked, totalLikes, usersWhoLiked } = post;

    let first = userHasLiked ? 'You' : usersWhoLiked[0]?.username ?? '';
    let second = userHasLiked ? usersWhoLiked[0]?.username ?? '' : usersWhoLiked[1]?.username ?? '';

    return userHasLiked
      ? totalLikes === 1
        ? 'You'
        : totalLikes < 3
        ? `You and ${first}`
        : `You, ${first} and other ${totalLikes - 2}`
      : totalLikes === 1
      ? `${first}`
      : totalLikes === 2
      ? `${first} and ${second}`
      : `${first && second ? `${first}, ${second} and other ${totalLikes - 2}` : 'No likes yet'}`;
  }

  function processLikesLabel() {
    return post.totalLikes > 0 ? ` like${post.totalLikes === 1 ? '' : 's'}` : '';
  }

  function processLikes() {
    return post.totalLikes > 0 ? `${post.totalLikes}` : 'No likes yet';
  }
}
