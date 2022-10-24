import React from 'react';
import './styles/main.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import food from '../assets/images/videos/food.png';
import profile from '../assets/images/videos/user.png';

const Main = () => {
  let [loading, setLoading] = useState(false);
  let [content, setContent] = useState([]);
  let [user, setUser] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {setUser(data)})
    }, [])
  
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {setContent(data)
    setLoading(false)})
    }, [])
    
    if (loading) {
      return (
          <p className='mx-auto mt-3 h1 fw-bold '>Loading, be patient...</p>  
        )
      }

  return (
    <div className='container'>
      <div className='wrapper mt-4'>
          {
              user.slice(0, 1).map((pro) => (
                <Link className='user-wrapper d-flex align-items-center' to={`/profile/${pro.id}`}>
                  <div>
                    <img className='user-img me-4' src={profile} alt={pro.name} width={50} height={50}/>

                    <span className='user-name h4 m-0 fw-bold'>{pro.name}</span>
                  </div>
                </Link>
              ))
            }

        <ul className='card-top-list list-unstyled mt-3 d-flex gap-3'>
        {
          content.slice(0, 5).map((video) => (
            <li className='video-item w-25 mb-3' key={video.id}>
              <Link className='direct-link text-decoration-none text-dark' to={`/video/${video.id}`}>
                <img className='card-img rounded-5' src={video.url} alt={video.title} width={250} height={150}/>

                <h3 className="item-title fs-6 fw-bold mt-2">{video.title}</h3>

                <div className='info-wrapper d-flex align-items-center'>
                  <span className='info me-2'>{`${video.id}k views -`}</span>

                  <span className='info'>{`${video.albumId} days ago`}</span>
                </div>
              </Link>
            </li>
          ))
        } 
        </ul>

        <ul className='card-top-list list-unstyled mt-3 d-flex gap-3'>
        {
          content.slice(0, 4).map((video) => (
            <li key={video.id} className='video-item w-25 mb-3'>
              <Link to={`/video/${video.id}`} className='direct-link text-decoration-none text-dark'>
                <img className='card-img rounded-5' src={video.url} alt={video.title} width={540} height={250}/>

                <h3 className="item-title fs-6 fw-bold mt-2">{video.title}</h3>

                <div className='info-wrapper d-flex align-items-center'>
                  <span className='info me-2'>{`${video.id}k views -`}</span>

                  <span className='info'>{`${video.albumId} days ago`}</span>
                </div>
              </Link>
            </li>
          ))
        } 
        </ul>

        <Link className='user-wrapper d-flex align-items-center' to={'/profile'}>
          <img className='user-img me-4' src={food} alt="food" width={50} height={50}/>

          <span className='user-name h4 m-0 fw-bold'>Food & Drink</span>
        </Link>

        <ul className='card-top-list list-unstyled mt-3 d-flex gap-3'>
        {
          content.slice(0, 5).map((video) => (
            <li key={video.id} className='video-item w-25 mb-3'>
              <Link to={`/video/${video.id}`} className='direct-link text-decoration-none text-dark'>
                <img className='card-img rounded-5' src={video.url} alt={video.title} width={250} height={150}/>

                <h3 className="item-title fs-6 fw-bold mt-2">{video.title}</h3>

                <div className='info-wrapper d-flex align-items-center'>
                  <span className='info me-2'>{`${video.id}k views -`}</span>

                  <span className='info'>{`${video.albumId} days ago`}</span>
                </div>
              </Link>
            </li>
          ))
        } 
        </ul>
      </div>
    </div>
  )
}

export default Main