import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

import fallbackAvatar from './../../../assets/fallback-avatar.png';

import DataContext from './../../../hooks/DataContext';
import StyledNav from './styles/';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, setToken } = useContext(DataContext);
  const navigate = useNavigate();

  const navbar = buildNavbar();

  return <StyledNav>{navbar}</StyledNav>;

  function buildNavbar() {
    return (
      <>
        {isOpen ? <FaChevronUp onClick={closeNav} /> : <FaChevronDown onClick={openNav} />}
        <img
          src={user?.imageUrl || fallbackAvatar}
          alt='user avatar miniature'
          onClick={toggleNav}
        />
        <div className={toggleCollapsable()} onClick={signOff}>
          <MdOutlineLogout className='dropdown-menu__icon' />
          <p className='dropdown-menu__text'>Sign off</p>
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
