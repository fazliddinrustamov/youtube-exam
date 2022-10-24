import { React, useEffect, useState } from 'react';
import "./styles/sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// menu images

import Home  from "../assets/images/sidebar/home.png";
import Trending from "../assets/images/sidebar/trending.png";
import SubscriptionIcon from "../assets/images/sidebar/subscription.png";
import Library from "../assets/images/sidebar/library.png";
import History from "../assets/images/sidebar/history.png";
import Watchlater from "../assets/images/sidebar/watch.png";
import Favourites from "../assets/images/sidebar/favourites.png";
import Likedvideos from "../assets/images/sidebar/likes.png";
import Music from "../assets/images/sidebar/music.png";
import Games from "../assets/images/sidebar/games.png";
import Show from "../assets/images/sidebar/chevron-down.png";

// profile images


import userIcon from "../assets/images/sidebar/user-icon.png";

function Sidebar () {
  let [up, setUp] = useState(false);
  let [user, setUser] = useState([]);
  
  useEffect(() => {
    setUp(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {setUser(data)
    setUp(false)})
    }, [])
    
    if (up) {
      return (
          <p className='mx-auto mt-3 h1 fw-bold '>Loading, be patient...</p>  
        )
      }

    return(
      <div className='sidebar mt-4 ms-5 me-5'>
        <div className='sidebar-container'>
            <ul className='sidebar-list list-unstyled'>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Home} alt='item-img' width={20} height={19}/>

                  <span className='item-info'>Home</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Trending} alt='item-img' width={16} height={21}/>

                  <span className='item-info'>Trending</span>
                </div>
              </li>
              <li className='sidebar-item mb-5'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={SubscriptionIcon} alt='item-img' width={18} height={18}/>

                  <span className='item-info'>Subscription</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Library} alt='item-img' width={20} height={16}/>

                  <span className='item-info'>Library</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={History} alt='item-img' width={20} height={18}/>

                  <span className='item-info'>History</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Watchlater} alt='item-img' width={17} height={19}/>

                  <span className='item-info'>Watch later</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Favourites} alt='item-img' width={19} height={18}/>

                  <span className='item-info'>Favourites</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Likedvideos} alt='item-img' width={18} height={17}/>

                  <span className='item-info'>Liked videos</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Music} alt='item-img' width={18} height={20}/>

                  <span className='item-info'>Music</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>
                  <img className='item-img me-3' src={Games} alt='item-img' width={22} height={16}/>

                  <span className='item-info'>Games</span>
                </div>
              </li>
              <li className='sidebar-item mb-4'>
                <div className='item-wrapper d-flex align-items-center'>  
                  <img className='item-img me-3' src={Show} alt='item-img' width={14} height={8}/>

                  <span className='item-info'>Show more</span>
                </div>
              </li>
            </ul>

            <p className='sidebar-section fw-bold h3'>Subscriptions</p>

            <ul className='sidebar-profile-list list-unstyled mt-4'>
            {
              user.slice(0, 6).map((pro) => (
                <li className='video-item w-100 mb-3' key={pro.id}>
                  <Link className='direct-link text-decoration-none text-dark profile-wrapper d-flex align-items-center' to={`/profile/${pro.id}`}>
                    <img className='user-img rounded-5' src={userIcon} alt={pro.name} width={40} height={40}/>

                    <span className='profile-name ms-3'>{pro.name}</span>
                  </Link>
                </li>
              ))
            }
            </ul>
        </div>
      </div>
    )
}

export default Sidebar