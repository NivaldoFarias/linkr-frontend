import { useContext, useState } from 'react';
import DataContext from '../../../hooks/DataContext';

import { Wrapper, PostForm } from './styles/';
import Axios from '../../../blueprints';
import fallbackAvatar from '../../../assets/fallback-avatar.png';

export default function NewPost({ updatePostsFunction }) {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [fieldVisibility, setFieldVisibility] = useState(false);

  const { user, token } = useContext(DataContext);

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
    } catch (e) {
      console.log('Não foi posssivel criar um novo post', e);
      setUrl('');
      setDescription('');
      alert('Houve um erro ao publicar seu link');
      setFieldVisibility(false);
    }
  }

  return (
    <Wrapper>
      <img src={user?.imageUrl || fallbackAvatar} alt='user'></img>
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

        <button disabled={fieldVisibility}>{!fieldVisibility ? 'Publish' : 'Publishing...'}</button>
      </PostForm>
    </Wrapper>
  );
}
