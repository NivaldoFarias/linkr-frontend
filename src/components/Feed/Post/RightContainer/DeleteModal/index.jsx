import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { StyledLoadingDots } from './../../../../../styles';

import PostContext from './../../../../../hooks/PostContext';
import FeedContext from './../../../../../hooks/FeedContext';

import getRandomInt from './../../../../../utils/getRandomInt';
import Axios from './../../../../../blueprints';

export default function DeleteModal() {
  const {
    postData: { id: postId },
    modalIsOpen,
    setModalIsOpen,
    CONFIG,
    handleError,
  } = useContext(PostContext);
  const { updatePostsFunction } = useContext(FeedContext);
  const [submitDelete, setSubmitDelete] = useState(false);

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
    const url = `/posts/${postId}`;
    try {
      await Axios.delete(url, CONFIG);
      setModalIsOpen(false);
      updatePostsFunction();
    } catch (err) {
      handleError('Unable to delete post');
      setModalIsOpen(false);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }
}
