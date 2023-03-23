import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BsMicFill } from 'react-icons/bs';
import style from '../style/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navBarContainer}>
      <button
        className={style.navBarBtn}
        type="button"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={style.navBarHeading}>Stock Screener</h4>
      <div className={style.navBarIcons}>
        <BsMicFill />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default Navbar;
