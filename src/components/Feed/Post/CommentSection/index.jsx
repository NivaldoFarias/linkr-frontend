import { useContext, useEffect, useState } from 'react';
import { RiUserStarFill } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';

import DataContext from '../../../../hooks/DataContext';
import PostContext from '../../../../hooks/PostContext';
import StyledCommentSection from './styles';

function CommentSection() {
  const { user } = useContext(DataContext);
  const [inputValue, setInputValue] = useState('');
  const { commentsData, setCommentsData, isCommentSectionOpen } = useContext(PostContext);

  useEffect(() => {
    setCommentsData([
      ...commentsData,
      {
        id: 1,
        userId: user.id,
        imageUrl: user.imageUrl,
        username: user.username,
        text: 'testing comment section',
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCommentSection className={isCommentSectionOpen ? '' : 'collapsed'}>
      <div className='comments-container'>
        {commentsData.length > 0 ? (
          commentsData.map((comment) => {
            return (
              <div key={comment.id} className='comment'>
                <img className='comment__avatar' src={comment.imageUrl} alt='user avatar' />
                <div className='comment__content'>
                  <div className='comment__content__username'>
                    <p>{comment.username}</p>
                    {comment.userId === user.id ? (
                      <div className='comment-user-status'>
                        <RiUserStarFill className='comment-user-status__icon' />
                        <p className='comment-user-status__label'>OP</p>
                      </div>
                    ) : (
                      <></>
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
        />
        <AiOutlineSend className='new-comment__icon' />
      </div>
    </StyledCommentSection>
  );

  function handleInput(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 240)}px`;
    setInputValue(e.target.value);
  }
}

export default CommentSection;
