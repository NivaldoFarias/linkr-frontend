import { useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';

import { AiFillHeart, AiOutlineHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

import PostContainer from './styles/';
import DataContext from '../../../hooks/DataContext';
import Axios from '../../../blueprints';

export default function Post(props) {
  const { token, user } = useContext(DataContext);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [post, setPost] = useState(props.post);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [textEdit, setTextEdit] = useState(post.text);

  const [editText, setEditText] = useState(props.post.text || '');

  const CONFIG = { headers: { Authorization: `Bearer ${token}` } };
  const navigate = useNavigate();

  useEffect(() => {
    setIsLiked(props.post.userHasLiked);
    setPost(props.post);
    setEditText(props.post.text);
  }, [props]);

  function goToUserPage() {
    navigate(`/user/${post.userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '');
    navigate(`/hashtag/${cleanHashtag}`);
  }

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

  async function updatePostData() {
    const url = `/posts/${post.id}`;
    try {
      const { data } = await Axios.get(url, CONFIG);
      setPost(data);
    } catch (err) {
      handleError(err);
    }
  }

  async function editPostData() {
    const url = `/posts/${post.id}`;
    try {
      await Axios.put(url, { text: editText }, CONFIG);
    } catch (err) {
      handleError(err);
    }
  }

  function handleEditPostInputChange(e) {
    e.preventDefault();
    setEditText(e.target.value);
  }

  async function handleDeletePost() {
    const url = `/posts/${post.id}`;
    try {
      await Axios.delete(url, CONFIG);
      setIsOpen(false);
      props.updatePostsFunction();
    } catch (err) {
      handleError('Unable to delete post');
      setIsOpen(false);
    }
  }

  async function handleEditPost() {
    const url = `/posts/${post.id}`;
    console.log('hello', textEdit);
    try {
      await Axios.patch(url, { text: textEdit }, CONFIG);
      props.updatePostsFunction();
      setIsEditing(false);
    } catch (err) {
      alert('Não foi possivel editar!');
      console.log(err);
    }
  }

  async function handleHableEdit() {
    setIsEditing(!isEditing);
    setTextEdit(post.text);
  }

  function keyFunctions(e) {
    if (e.keyCode === 27) {
      setIsEditing(false);
      setTextEdit(post.text);
    }

    if (e.key === 'Enter') {
      handleEditPost();
    }
  }

  function handleError(error) {
    confirmAlert({
      message: `${
        error.response?.data.message ?? `${error ? error : ' Something went wrong'}`
      }. Please try again.`,
      buttons: [
        {
          label: 'OK',
          onClick: () => null,
        },
      ],
    });
  }

  function likesLabel() {
    const { userHasLiked, totalLikes, usersWhoLiked } = post;
    let label = userHasLiked ? (
        totalLikes === 1 ?
            'You' :
            totalLikes < 3 ?
                `You and ${usersWhoLiked[0].username}` :
                `You, ${usersWhoLiked[0].username} and other ${totalLikes - 2}`
    ) : (
        totalLikes === 1 ?
            `${usersWhoLiked[0].username}` :
            totalLikes === 2 ?
                `${usersWhoLiked[0].username} and ${usersWhoLiked[1].username}` :
                `${usersWhoLiked[0].username}, ${usersWhoLiked[1].username} and other ${totalLikes - 2}`
    )
    return label;
}

  const likes = (
    <div className='left-container__likes' onClick={likeButtonClicked}>
      {isLiked ? <AiFillHeart className={isLiked ? 'red-heart' : ''} /> : <AiOutlineHeart />}
      <div data-tip={likesLabel()} className='left-container__likes__label'>
        <strong>{processLikes()}</strong>
        {processLikesLabel()}
      </div>
    </div>
  );

  const postText = (
    <div className='post-header__text'>
      <ReactHashtag
        renderHashtag={(val) => (
          <span
            className='hashtag'
            onClick={() => {
              goToHashtagPage(val);
            }}
          >
            {val}
          </span>
        )}
      >
        {post.text}
      </ReactHashtag>
    </div>
  );

  const postTextEdit = (
    <textarea
      className='post-header__edit'
      onChange={handleEditPostInputChange}
      value={editText}
    ></textarea>
  );

  const postUrl = (
    <a className='link' href={post.url} target='blank'>
      <div className='link__container'>
        <div className='link-info'>
          <div className='link-info__title'>{post.urlTitle}</div>
          <div className='link-info__description'>{post.urlDescription}</div>
          <div className='link-info__url'>{post.url}</div>
        </div>
        <div className='link-image'>
          <img src={post.urlPicture} alt='' />
        </div>
      </div>
    </a>
  );

  const deletePost = (
    <div className='delete-post'>
      <Modal
        className='modal'
        portalClassName='modal-portal'
        overlayClassName='overlay'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <IoCloseSharp className='close-modal-btn' onClick={closeModal} />
        <div className='modal-container'>
          <h2>Are you sure you want to delete this post?</h2>
          <div>
            <button onClick={closeModal} className='return-btn'>
              Return
            </button>
            <button onClick={handleDeletePost} className='delete-btn'>
              Yes, delete it
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );

  async function handleEditPostButtonClicked() {
    if (isEditing) {
      try {
        await editPostData();
        await updatePostData();
        setIsEditing(false);
      } catch (error) {
        handleError(error);
      }
    } else {
      setIsEditing(true);
    }
  }

  return (
    <PostContainer key={post.id}>
      <ReactTooltip type='light' place='bottom' effect='solid' />
      <div className='left-container'>
        <img
          className='left-container__image'
          alt='post creator user avatar'
          onClick={goToUserPage}
          src={post.userPictureUrl}
        />
        {likes}
      </div>
      <div className='right-container'>
        {deletePost}
        <div className='post-header'>
          <div className='post-header__username'>
            <p onClick={goToUserPage}>{post.username}</p>
            {post.userId === user.id ? (
              <div className='actions-container'>
                <AiFillEdit onClick={handleEditPostButtonClicked} />
                <AiFillDelete onClick={openModal} />
              </div>
            ) : (
              <></>
            )}
          </div>
          {isEditing ? postTextEdit : postText}
        </div>
        {postUrl}
      </div>
    </PostContainer>
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function processLikesLabel() {
    return post.totalLikes > 0 ? ` like${post.totalLikes === 1 ? '' : 's'}` : '';
  }

  function processLikes() {
    return post.totalLikes > 0 ? `${post.totalLikes}` : 'No likes yet';
  }
}
