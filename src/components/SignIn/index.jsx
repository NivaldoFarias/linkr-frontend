import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Axios from '../../blueprints';
import DataContext from './../../hooks/DataContext';
import getRandomInt from '../../utils/getRandomInt';

import { StyledLoadingDots, StyledInput, StyledLink, StyledButton } from './../../styles/';
import StyledPage from './styles';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { setUser } = useContext(DataContext);
  const { setToken } = useContext(DataContext);
  const navigate = useNavigate();

  function buildSigninPage() {
    return (
      <>
        <form
          className='signin-form'
          onSubmit={(e) => {
            e.preventDefault();
            setHasSubmitted(true);
            setTimeout(() => {
              handleSignin();
            }, getRandomInt(750, 2000));
          }}
        >
          <StyledInput>
            <input
              type='text'
              value={formData.username}
              name='username'
              onChange={handleInputChange}
              required
            />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Username</label>
          </StyledInput>
          <StyledInput>
            <input
              type='password'
              value={formData.password}
              name='password'
              onChange={handleInputChange}
              required
            />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Password</label>
          </StyledInput>
          <StyledButton className={validateForm()} type='submit'>
            {hasSubmitted ? <StyledLoadingDots /> : 'Sign In'}
          </StyledButton>
          <StyledLink to='/sign-up'>not yet registered? SIGN UP</StyledLink>
        </form>
      </>
    );

    async function handleSignin() {
      try {
        const URL = '/auth/sign-in';
        const body = {
          username: formData.username,
          password: formData.password,
        };

        const response = await Axios.post(URL, body);
        handleSuccess(response.data);
      } catch (error) {
        handleError(error);
        resetAll();
      }

      function handleError(error) {
        confirmAlert({
          message: `${error.response?.data.message ?? 'Something went wrong'}. Please try again.`,
          buttons: [
            {
              label: 'OK',
              onClick: () => null,
            },
          ],
        });
        resetAll();
      }

      function handleSuccess(res) {
        setToken(res.token);
        setUser({ username: res.username, imageUrl: res.imageUrl });
        navigate('/timeline');
      }
    }

    function handleInputChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function validateForm() {
      return formData.username?.length > 0 && formData.password?.length > 0 && !hasSubmitted
        ? ''
        : 'disabled';
    }

    function resetAll() {
      setHasSubmitted(false);
      setFormData({
        username: '',
        password: '',
      });
    }
  }

  const signinPage = buildSigninPage();

  return <StyledPage>{signinPage}</StyledPage>;
}

export default SignIn;
