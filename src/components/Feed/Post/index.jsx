import { useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';

import getRandomInt from '../../../utils/getRandomInt';
import DataContext from '../../../hooks/DataContext';
import Axios from '../../../blueprints';

import { StyledLoadingDots } from '../../../styles';
import PostContainer from './styles/';

import Likes from './Likes';
import PostText from './PostText';

// NEED REFACTOR

export default function Post(props) {
  const { token, user } = useContext(DataContext);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [post, setPost] = useState(props.post);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [submitDelete, setSubmitDelete] = useState(false);
  const [editText, setEditText] = useState(props.post.text || '');

  const CONFIG = { headers: { Authorization: `Bearer ${token}` } };
  const navigate = useNavigate();
  const regex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );

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

  const postTextEdit = buildPostTextEdit();
  const postUrl = buildPostUrl();
  const deletePost = buildDeletePost();

  return (
    <PostContainer>
      <ReactTooltip type='light' place='bottom' effect='solid' />
      <div className='left-container'>
        <img
          className='left-container__image'
          alt='post creator user avatar'
          onClick={goToUserPage}
          src={post.userPictureUrl}
        />
        <Likes
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          post={post}
          updatePostData={updatePostData}
        />
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
          {isEditing ? postTextEdit : <PostText post={post} />}
        </div>
        {postUrl}
      </div>
    </PostContainer>
  );

  function buildPostTextEdit() {
    return (
      <textarea
        className='post-header__edit'
        onChange={handleEditPostInputChange}
        value={editText}
      ></textarea>
    );
  }

  function buildPostUrl() {
    return (
      <a className='link' href={post.url} target='blank'>
        <div className='link__container'>
          <div className='link-info'>
            <div className='link-info__title'>{post.urlTitle}</div>
            <div className='link-info__description'>{post.urlDescription}</div>
            <div className='link-info__url'>{post.url}</div>
          </div>
          <div className='link-image'>
            {regex.test(post.urlPicture) ? (
              <img src={post.urlPicture} alt='link header' />
            ) : (
              <>
                <MdOutlineImageNotSupported className='link-image__not-supported-icon' />
                <p className='link-image__not-supported-text'>Not supported</p>
              </>
            )}
          </div>
        </div>
      </a>
    );
  }

  function buildDeletePost() {
    return (
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
              <button
                onClick={() => {
                  setSubmitDelete(true);
                  setTimeout(() => {
                    handleDeletePost();
                  }, getRandomInt(750, 2000));
                }}
                className='delete-btn'
              >
                {submitDelete ? <StyledLoadingDots /> : 'Yes, delete it'}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );

    async function handleDeletePost() {
      setSubmitDelete(false);
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

    function closeModal() {
      setIsOpen(false);
    }
  }

  function openModal() {
    setIsOpen(true);
  }
}
