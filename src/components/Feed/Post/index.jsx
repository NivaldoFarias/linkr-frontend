import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ReactHashtag from '@mdnm/react-hashtag';

import PostContainer from './styles/';
import DataContext from '../../../hooks/DataContext';
import Axios from '../../../blueprints';

export default function Post(props) {
  const { token } = useContext(DataContext);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [post, setPost] = useState(props.post);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLiked(props.post.userHasLiked);
    setPost(props.post);
  }, [props]);

  function goToUserPage() {
    navigate(`/user/${post.userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '');
    navigate(`/hashtag/${cleanHashtag}`);
  }

  async function likeButtonClicked() {
    console.log('likeButtonClicked');
    const tryToLike = !isLiked;
    setIsLiked(tryToLike);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `/posts/${post.id}/${tryToLike ? '' : 'un'}like`;
    try {
      await Axios.post(url, {}, config);
      await updatePostData();
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePostData() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const url = `/posts/${post.id}`;
    try {
      const { data } = await Axios.get(url, config);
      console.log(data);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PostContainer key={post.id}>
      <div className='left-container'>
        <img
          className='left-container__image'
          alt='post creator user avatar'
          onClick={goToUserPage}
          src={post.userPictureUrl}
        />
        <div className='left-container__likes' hasLiked={isLiked} onClick={likeButtonClicked}>
          {isLiked ? <AiFillHeart className={isLiked ? 'red-heart' : ''} /> : <AiOutlineHeart />}
          <div className='left-container__likes__label'>
            {post.totalLikes > 0
              ? `${post.totalLikes} like${post.totalLikes === 1 ? '' : 's'}`
              : ''}
          </div>
        </div>
      </div>
      <div className='right-container'>
        <div className='post-header'>
          <div className='post-header__username' onClick={goToUserPage}>
            {post.username}
          </div>
          <div className='post-header__text'>
            <ReactHashtag
              renderHashtag={(val) => (
                <div
                  className='hashtag'
                  onClick={() => {
                    goToHashtagPage(val);
                  }}
                >
                  {val}
                </div>
              )}
            >
              {post.text}
            </ReactHashtag>
          </div>
        </div>
        <a className='link' href={post.url} target='blank'>
          <div className='link__container'>
            <div className='link-info'>
              <div className='link-info__title'>{post.urlTitle}</div>
              <div className='link-info__description'>{post.urlDescription}</div>
              <div className='link-info__url'>{post.url}</div>
            </div>
            <div className='link-image'>
              <img src={post.urlPictureUrl} alt='' />
            </div>
          </div>
        </a>
      </div>
    </PostContainer>
  );
}
