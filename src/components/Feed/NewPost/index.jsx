import { useContext, useState } from 'react';

import fallbackAvatar from './../../../assets/fallback-avatar.png';
import DataContext from '../../../hooks/DataContext';
import { Wrapper, PostForm } from './styles/';
import Axios from '../../../blueprints';
import FeedContext from '../../../hooks/FeedContext';

export default function NewPost() {
  const [url, setUrl] = useState('');
  const [btnClick, setBtnClick] = useState(false);
  const [description, setDescription] = useState('');
  const [fieldVisibility, setFieldVisibility] = useState(false);

  const { user, token } = useContext(DataContext);
  const {
    hooks: {
      data: { submitPost },
    },
  } = useContext(FeedContext);

  return (
    <Wrapper>
      <img src={user?.imageUrl ?? fallbackAvatar} alt='user'></img>
      <PostForm onSubmit={handleSendNewPost}>
        <h3>What are you going to share today?</h3>
        <input
          type='url'
          name='url_share'
          placeholder='http://...'
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          required
          disabled={fieldVisibility}
        />
        <input
          type='text'
          name='description'
          placeholder='Awesome article about #javascript'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
          disabled={fieldVisibility}
        />

        <button
          className={btnClick ? 'clicked' : ''}
          onClick={toggleBtn}
          type='submit'
          disabled={fieldVisibility}
        >
          {!fieldVisibility ? 'Publish' : 'Publishing...'}
        </button>
      </PostForm>
    </Wrapper>
  );

  async function handleSendNewPost(e) {
    e.preventDefault();
    setFieldVisibility(true);

    await submitPost(url, description);
    setFieldVisibility(false);
    setUrl('');
    setDescription('');
  }

  function toggleBtn() {
    setBtnClick(true);

    setTimeout(() => {
      setBtnClick(false);
    }, 200);
  }
}
