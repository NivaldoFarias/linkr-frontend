import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { StyledLoadingDots } from './../../../../../styles';

import PostContext from './../../../../../hooks/PostContext';
import FeedContext from './../../../../../hooks/FeedContext';

import getRandomInt from './../../../../../utils/getRandomInt';

export default function DeleteModal() {
  const {
    post: { id: postId },
    modalIsOpen,
    setModalIsOpen,
  } = useContext(PostContext);
  const {
    hooks: {
      data: { deletePost },
    },
  } = useContext(FeedContext);
  const [hasSubmited, setHasSubmited] = useState(false);

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
                setHasSubmited(true);
                setTimeout(() => {
                  submitDelete();
                }, getRandomInt(750, 2000));
              }}
              className='delete-btn'
            >
              {hasSubmited ? <StyledLoadingDots /> : 'Yes, delete it'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );

  async function submitDelete() {
    setHasSubmited(false);
    try {
      await deletePost(postId);
      setModalIsOpen(false);
    } catch (err) {
      setModalIsOpen(false);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }
}
