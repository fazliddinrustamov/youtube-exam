import React from 'react';
import logo from '.././assets/images/header/header/logo.svg';
import camera from '.././assets/images/header/header/camera.png';
import menu from '.././assets/images/header/header/something.png';
import bell from '.././assets/images/header/header/bell.png';
import profile from '.././assets/images/header/header/profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <div className='header mt-4'>
      <div className='head-wrapper mx-auto'>
        <div className='header-inner d-flex align-items-center justify-content-between pt-2'>
          <Link to={'/home'} className='d-inline-block'>
            <img className='logo-img' src={logo} alt='logo' />
          </Link>
          
          <form className='header-form ms-5 w-25'>
            <input className='search-input rounded-5 form-control w-100 px-4 py-2' placeholder='Search'></input>
          </form>

          <div className='right-side d-flex align-items-center justify-content-between'>
            <img className='menu-images' src={camera} alt='camera' width={27} height={20}/>

            <img className='menu-images ms-5' src={menu} alt='menu' width={21} height={21}/>

            <img className='menu-images ms-5' src={bell} alt='bell' width={27} height={32}/>

            <img className='menu-images ms-5' src={profile} alt='profile' width={40} height={40}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;