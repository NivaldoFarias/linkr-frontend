import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ReactHashtag from '@mdnm/react-hashtag';

import PostContainer from './styles/';
import DataContext from '../../../hooks/DataContext';
import Axios from '../../../blueprints';

/*
{
  id: "34"
  text: "Olha o github de jesus!! #jesus #github"
  totalLikes: 0
  url: "https://github.com/jesus/"
  urlDescription: "Jesus has 51 repositories available. Follow their code on GitHub."
  urlPicture: "https://avatars.githubusercontent.com/u/23031?v=4?s=400"
  urlTitle: "Jesus - Overview"
  userHasLiked: false
  userId: "3"
  userPictureUrl: "https://img.freepik.com/vetores-gratis/avatar-de-midia-social-jovem-ruiva-moderna_506604-471.jpg"
  username: "magabi"
  usersWhoLiked: [] // máximo 2
}
*/

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
      const response = await Axios.post(url, {}, config);
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
        <div
          className={`left-container__likes ${isLiked ? 'red-heart' : ''}`}
          hasLiked={isLiked}
          onClick={likeButtonClicked}
        >
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          <div className='left-container__likes__label'>{post.totalLikes} likes</div>
        </div>
      </div>
      <div className='right-container'>
        <div className='right-container__username' onClick={goToUserPage}>
          {post.username}
        </div>
        <div className='right-container__text'>
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

        <a className='link' href={post.url} target='blank'>
          <div className='link__container'>
            <div className='link-info'>
              <div className='link-info__title'>{post.urlTitle}</div>
              <div className='link-info__description'>{post.urlDescription}</div>
              <div className='link-info__url'>{post.url}</div>
            </div>
            <div className='link-image'>
              <img src={post.urlPicture} alt='url website default header' />
            </div>
          </div>
        </a>
      </div>
    </PostContainer>
  );
}
