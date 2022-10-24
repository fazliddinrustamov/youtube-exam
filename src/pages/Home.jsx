import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Header />
      
      <div className='d-flex mt-4'>
        <Sidebar/>
        <Main />
      </div>
    </>
  )
};

export default Home;