import { useState, useContext } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import DataContext from './../../hooks/DataContext';
import getRandomInt from './../../utils/getRandomInt.js';

import StyledLoadingDots from './../../layout/StyledLoadingDots';
import StyledInput from './../../layout/StyledInput';
import StyledLink from './../../layout/StyledLink';
import StyledButton from './../../layout/StyledButton';
import StyledPage from './styles';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { setSession } = useContext(DataContext);

  function buildSignUpPage() {
    return (
      <>
        <form
          className='signup-form'
          onSubmit={(e) => {
            e.preventDefault();
            setHasSubmitted(true);
            setTimeout(() => {
              handleSignup();
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
          <StyledInput>
            <input
              type='text'
              value={formData.email}
              name='email'
              onChange={handleInputChange}
              required
            />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Email</label>
          </StyledInput>
          <StyledInput>
            <input
              type='text'
              value={formData.imageUrl}
              name='imageUrl'
              onChange={handleInputChange}
              required
            />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Avatar url</label>
          </StyledInput>
          <StyledButton className={validateForm()} type='submit'>
            {hasSubmitted ? <StyledLoadingDots /> : 'Sign up'}
          </StyledButton>
          <StyledLink to='/'>already registered? SIGN IN</StyledLink>
        </form>
      </>
    );

    async function handleSignup() {
      try {
        const URL = '';
        const body = {
          username: formData.username,
          password: formData.password,
          email: formData.email,
          imageUrl: formData.imageUrl,
        };

        const response = await axios.post(URL, body);
        response.status === 200 ? handleSuccess(response) : handleError();
      } catch (error) {
        handleError(error);
        resetAll();
      }

      function handleError(error) {
        confirmAlert({
          message: `${error.response.data.message ?? 'Something went wrong'}. Please try again.`,
          buttons: [
            {
              label: 'OK',
              onClick: () => null,
            },
          ],
        });
      }

      function handleSuccess(res) {
        console.log(res);
      }
    }

    function handleInputChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function validateForm() {
      return formData.username?.length > 0 &&
        formData.email?.length > 0 &&
        formData.password?.length > 0 &&
        formData.imageUrl?.length > 0 &&
        !hasSubmitted
        ? ''
        : 'disabled';
    }

    function resetAll() {
      setHasSubmitted(false);
      setFormData({
        username: '',
        password: '',
        email: '',
        imageUrl: '',
      });
    }
  }

  const signupPage = buildSignUpPage();

  return <StyledPage>{signupPage}</StyledPage>;
}

export default SignUp;
