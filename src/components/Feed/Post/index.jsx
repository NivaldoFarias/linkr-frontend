import { AiFillHeart, AiOutlineHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';

import PostContainer from './styles/';
import DataContext from '../../../hooks/DataContext';
import Axios from '../../../blueprints';

export default function Post(props) {
  const { token } = useContext(DataContext);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [post, setPost] = useState(props.post);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [textEdit, setTextEdit] = useState(post.text);
  const inputRef = useRef();

  

  const CONFIG = { headers: { Authorization: `Bearer ${token}` } };
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

    const url = `/posts/${post.id}/${tryToLike ? '' : 'un'}like`;
    try {
      await Axios.post(url, {}, CONFIG);
      await updatePostData();
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePostData() {
    const url = `/posts/${post.id}`;
    try {
      const {data} = await Axios.get(url, CONFIG);
      await updatePostData();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeletePost() {
    const url = `/posts/${post.id}`;
    try {
      await Axios.delete(url, CONFIG);
      setIsOpen(false);
      props.updatePostsFunction();

    } catch (err) {
      setIsOpen(false);
      alert("Não foi possivel excluir o post.");
      console.log(err);
    }
  }

  async function handleEditPost(){
    const url = `/posts/${post.id}`;
    console.log("hello",textEdit);
    try {
      await Axios.patch(url, {text: textEdit }, CONFIG);
      props.updatePostsFunction();
      setIsEditing(false);
    } catch (err) {
      alert("Não foi possivel editar!");
      console.log(err);
    }
  }

  async function handleHableEdit() {
    setIsEditing(!isEditing);
    setTextEdit(post.text);
  }

  function keyFunctions(e){
    if(e.keyCode === 27){
      setIsEditing(false);
      setTextEdit(post.text);
    }

    if(e.key === 'Enter') {
      handleEditPost()
    }
  }

  function likesLabel (){
    const { userHasLiked, totalLikes, usersWhoLiked } = post;
    
    if(userHasLiked){
      if(totalLikes === 1){
        return "You"
    } else if(totalLikes < 3){
        return `You and ${usersWhoLiked[0].username}`
    } else if(totalLikes > 2){
        return `You, ${usersWhoLiked[0].username} and other ${totalLikes - 2}`
    }
  } else {
    if(totalLikes === 1){
      return `${usersWhoLiked[0].username}`
    } else if(totalLikes === 2){
      return `${usersWhoLiked[0].username} and ${usersWhoLiked[1].username}`
    } else if(totalLikes > 2){
      return `${usersWhoLiked[0].username}, ${usersWhoLiked[1].username} and other ${totalLikes - 2}`
    }
  }
  }

  return (
    <PostContainer key={post.id}>
      <ReactTooltip type="light" place="bottom" effect="solid"/>
      <div className='left-container'>
        <img
          className='left-container__image'
          alt='post creator user avatar'
          onClick={goToUserPage}
          src={post.userPictureUrl}
        />
        <div className='left-container__likes' onClick={likeButtonClicked}>
          {isLiked ? <AiFillHeart className={isLiked ? 'red-heart' : ''} /> : <AiOutlineHeart />}
          <div data-tip={likesLabel()} className='left-container__likes__label'>
            <strong>{processLikes()}</strong>
            {processLikesLabel()}
          </div>
        </div>
      </div>
      <div className='right-container'>
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
        <div className='post-header'>
          <div className='post-header__username'>
            <p onClick={goToUserPage}>{post.username}</p>
            <div className='actions-container'>
              <AiFillEdit onClick={handleHableEdit}/>
              <AiFillDelete onClick={openModal} />
            </div>
          </div>
          <div className='post-header__text'>
            { isEditing === true
              ? <input 
                  value={textEdit} 
                  type='textarea'
                  name='url_share'
                  onChange={(e) => {
                    setTextEdit(e.target.value);
                  }}
                  onKeyDown={keyFunctions}
                  required
                  style={{
                    display: 'flex',
                    flex: '1',
                    flexWrap: 'wrap',
                    padding: "4px 8px",
                    minWidth: '100%',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  ref={inputRef}
                />
              :<ReactHashtag
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
            }
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
