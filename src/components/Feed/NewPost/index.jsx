import { useContext, useState } from 'react';
import DataContext from '../../../hooks/DataContext';

<<<<<<< HEAD:src/components/Feed/NewPost/index.jsx
import { Wrapper, PostForm } from './styles';
=======
import { Wrapper, PostForm } from './styles/';
>>>>>>> 154816bbb7a0281290f311bbfd9ce610a8b65b15:src/components/Feed/NewPost.jsx
import Axios from '../../../blueprints';

const mockAvatar = 'https://avatars.githubusercontent.com/u/90518458?v=4';

export default function NewPost({ updatePostsFunction }) {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [fieldVisibility, setfieldVisibility] = useState(false);

  const { user, token } = useContext(DataContext);

  async function handleSendNewPost(e) {
    e.preventDefault();
    setfieldVisibility(true);

    try {
      await Axios.post(
        '/posts/',
        { url, text: description },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      updatePostsFunction();
      setfieldVisibility(false);

    } catch (e) {
      console.log('Não foi posssivel criar um novo post', e);
      setUrl('');
      setDescription('');
      alert('Houve um erro ao publicar seu link');
      setfieldVisibility(false);
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

        <button disabled={fieldVisibility}>
          {!fieldVisibility ? "Publish" : "Publishing..."}
        </button>
      </PostForm>
    </Wrapper>
  );
}
