import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const Account = () => {
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <Profile />
      </div>
    </>
  )
}

export default Account;