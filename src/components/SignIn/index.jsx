import { useState, useContext } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import DataContext from '../../hooks/DataContext';
import getRandomInt from './../../utils/getRandomInt.js';

import StyledInput from '../../layout/StyledInput';
import StyledLink from '../../layout/StyledLink';
import StyledButton from '../../layout/StyledButton';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { setSession } = useContext(DataContext);

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
            Sign in
          </StyledButton>
          <StyledLink to='/'>Já possui uma conta? Faça Login</StyledLink>
        </form>
      </>
    );

    async function handleSignin() {
      try {
        const URL = '';
        const body = {
          username: formData.username,
          password: formData.password,
        };

        const result = await axios.post(URL, body);
        result.status === 200 ? handleSuccess(result.token) : handleError();
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

      function handleSuccess(token) {
        setSession(token);
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
        email: '',
        password: '',
      });
    }
  }

  const signinPage = buildSigninPage();

  return <section>{signinPage}</section>;
}

export default SignIn;
