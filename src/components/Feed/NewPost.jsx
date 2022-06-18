import { useContext, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import DataContext from '../../hooks/DataContext';

import { Wrapper, PostForm } from './styles';
import Axios from '../../blueprints';

const mockAvatar = 'https://avatars.githubusercontent.com/u/90518458?v=4';

export default function NewPost({ updatePostsFunction }) {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const { user, token } = useContext(DataContext);
  //const navigate = useNavigate();

  async function handleSendNewPost(e) {
    e.preventDefault();
    try {
      await Axios.post(
        '/posts/',
        { url, text: description },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      updatePostsFunction();
    } catch (e) {
      console.log('Não foi posssivel criar um novo post', e);
      setUrl('');
      setDescription('');
      alert('Não foi posssivel criar um novo post');
    }
  }

  return (
    <Wrapper>
      <img src={user?.imageUrl || mockAvatar} alt='user'></img>
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
        />

        <button>Publish</button>
      </PostForm>
    </Wrapper>
  );
}
