import { useContext, useEffect } from 'react';
import { RiUserStarFill } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';

import DataContext from '../../../../hooks/DataContext';
import PostContext from '../../../../hooks/PostContext';
import StyledCommentSection from './styles';

function CommentSection() {
  const { user } = useContext(DataContext);
  const { commentsData, setCommentsData } = useContext(PostContext);

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
    <StyledCommentSection>
      {commentsData.map((comment) => {
        return (
          <div key={comment.id}>
            <div className='comment-header'>
              <div className='comment-header__avatar'>
                <img src={comment.imageUrl} alt='user avatar' />
              </div>
              <div className='comment-header__username'>
                <p>{comment.username}</p>
                {comment.userId === user.id ? (
                  <div className='comment-user-status'>
                    <RiUserStarFill className='comment-user-status__icon' />
                    <p className='comment-user-status__label'>post's author</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className='comment-text'>
              <p>{comment.text}</p>
            </div>
          </div>
        );
      })}
      <div className='new-comment'>
        <img className='new-comment__avatar' src={user.imageUrl} alt='user avatar' />
        <input className='new-comment__input' type='text' placeholder='Write a comment...' />
        <AiOutlineSend className='new-comment__icon' />
      </div>
    </StyledCommentSection>
  );
}

export default CommentSection;
