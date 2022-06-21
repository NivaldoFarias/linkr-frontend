import { useContext, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';

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
  const { updatePostsFunction } = useContext(FeedContext);

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
    try {
      await Axios.post(
        '/posts/',
        { url, text: description },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      updatePostsFunction();
      setFieldVisibility(false);
      setUrl('');
      setDescription('');
    } catch (e) {
      console.log('Não foi posssivel criar um novo post', e);
      setUrl('');
      setDescription('');
      handleError('Unable to create new post');
      setFieldVisibility(false);
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

  function toggleBtn() {
    setBtnClick(true);

    setTimeout(() => {
      setBtnClick(false);
    }, 200);
  }
}
