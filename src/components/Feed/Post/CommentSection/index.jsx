import { useContext, useEffect, useState } from 'react';
import { RiUserStarFill } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';

import DataContext from '../../../../hooks/DataContext';
import PostContext from '../../../../hooks/PostContext';
import FeedContext from '../../../../hooks/FeedContext';

import StyledCommentSection from './styles';

function CommentSection() {
  const [inputValue, setInputValue] = useState('');
  const [processedComments, setProcessedComments] = useState([]);

  const { user } = useContext(DataContext);
  const {
    users,
    hooks: {
      data: { submitComment },
    },
  } = useContext(FeedContext);
  const {
    post: { id: postId, userId: postCreatorId, comments },
    isCommentSectionOpen,
  } = useContext(PostContext);

  useEffect(() => {
    setProcessedComments(
      comments.map((comment) => {
        return {
          id: comment.id,
          userId: comment.userId,
          text: comment.text,
          createdAt: comment.createdAt,
          imageUrl: users[comment.userId].imageUrl,
          username: users[comment.userId].username,
          isFollowing: users[comment.userId].isFollowing,
        };
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  return (
    <StyledCommentSection className={isCommentSectionOpen ? '' : 'collapsed'}>
      <div className='comments-container'>
        {processedComments.length > 0 ? (
          processedComments.map((comment) => {
            return (
              <div key={comment.id} className='comment'>
                <img className='comment__avatar' src={comment.imageUrl} alt='user avatar' />
                <div className='comment__content'>
                  <div className='comment__content__username'>
                    <p>{comment.username}</p>
                    {comment.userId === postCreatorId ? (
                      <div className='comment-user-status'>
                        <RiUserStarFill className='comment-user-status__icon' />
                        <p className='comment-user-status__label'>OP</p>
                      </div>
                    ) : (
                      comment.isFollowing ? (
                        <div className='comment-user-status'>
                        <p className='comment-user-status__label'>following</p>
                      </div>
                      ) :
                      (<></>)
                    )}
                  </div>
                  <div className='comment__content__text'>
                    <p>{comment.text}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className='new-comment'>
        <img className='new-comment__avatar' src={user.imageUrl} alt='user avatar' />
        <textarea
          rows={1}
          className='new-comment__input'
          value={inputValue}
          type='text'
          placeholder='Write a comment...'
          onChange={handleInput}
          onBlur={handleLeave}
          onReset={handleLeave}
          onKeyDown={handleKeyDown}
        />
        <AiOutlineSend className='new-comment__icon' onClick={handleSubmit} />
      </div>
    </StyledCommentSection>
  );

  function handleInput(e) {
    e.target.parentNode.style.height = `${Math.max(
      e.target.scrollHeight,
      e.target.parentNode.clientHeight,
    )}px`;
    setInputValue(e.target.value);
  }

  function handleLeave(e) {
    if (inputValue === '') e.target.parentNode.style.height = 'inherit';
  }

  function handleKeyDown(e) {
    if (e.key === 'Backspace') {
      e.target.parentNode.style.height = 'inherit';
    } else if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  async function handleSubmit() {
    await submitComment(inputValue, postId);
    setInputValue('');
  }
}

export default CommentSection;
