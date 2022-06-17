import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

import TokenContext from './../../../hooks/TokenContext';
import DataContext from '../../../hooks/DataContext';
import StyledNav from './styles';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const mockAvatar = 'https://avatars.githubusercontent.com/u/90518458?v=4';
  const { setToken } = useContext(TokenContext);
  const { user } = useContext(DataContext);
  const navigate = useNavigate();

  const navbar = buildNavbar();

  return <StyledNav>{navbar}</StyledNav>;

  function buildNavbar() {
    return (
      <>
        {isOpen ? <FaChevronUp onClick={closeNav} /> : <FaChevronDown onClick={openNav} />}
        <img src={user?.imageUrl || mockAvatar} alt='user avatar miniature' onClick={toggleNav} />
        <div className={toggleCollapsable()}>
          <MdOutlineLogout className='dropdown-menu__icon' onClick={signOff} />
          <p className='dropdown-menu__text' onClick={signOff}>
            Sign off
          </p>
        </div>
      </>
    );

    function signOff() {
      confirmAlert({
        message: `Are you sure you want to sign off?`,
        buttons: [
          {
            label: 'Sign off',
            onClick: () => {
              setToken(null);
              navigate('/');
            },
          },
          {
            label: 'Cancel',
            onClick: () => null,
          },
        ],
      });
    }

    function toggleCollapsable() {
      return `dropdown-menu ${isOpen ? '' : 'collapsed'}`;
    }

    function toggleNav() {
      setIsOpen(!isOpen);
    }

    function openNav() {
      setIsOpen(true);
    }

    function closeNav() {
      setIsOpen(false);
    }
  }
}
