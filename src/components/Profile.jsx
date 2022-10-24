import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/profile.css';

//images
import cover from '../assets/images/profile/Cover.png';
import user from '../assets/images/profile/user-photo.png';
import row1 from '../assets/images/profile/row1.png';
import row2 from '../assets/images/profile/row2.png';
import row3 from '../assets/images/profile/row3.png';
import video from '../assets/images/profile/Video.png';
import search from '../assets/images/profile/search.png';

const Profile = () => {
  let [videos, setVideos] = useState({});

  let [loading, setLoading] = useState(false);
  let [content, setContent] = useState([]);
  
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {setContent(data)
    setLoading(false)})
    }, [])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {setVideos(data)
        console.log(data);})
      }, [])
  
      let { id } = useParams();
  
      if (loading) {
        return (
            <p className='mx-auto mt-5 h1 fw-bold '>Loading, be patient...</p>  
          )
        }

  return (
      <div className='container'>
        <div className='wrapper mt-4'>
          <img className='cover-img' src={cover} alt='cover' width={1125} height={180}/>

          <div className='profile-wrapper mt-4 d-flex align-items-center'>
            <img className='user-img me-3' src={user} alt='user' width={80} height={80}/>

            <div className='user-info-wrapper'>
              <span className='user-info h3 fw-bold m-0'>{videos.name}</span>

              <span className='user-info d-block m-0'>245K subscribed</span>
            </div>

            <button className='subs-btn btn btn-danger px-4 py-3 rounded-5' type='button'>Subscribe 2.3m</button>
          </div>

          <div className='navigation-wrapper mt-4 d-flex align-items-center justify-content-between'>
            <Link className='text-decoration-none' to={'/home'}><span className='navigation-item'>Home</span></Link>

            <span className='navigation-item'>Videos</span>

            <span className='navigation-item'>Playlists</span>

            <span className='navigation-item'>Channels</span>

            <span className='navigation-item'>Discussion</span>

            <span className='navigation-item'>About</span>

            <img className='navigation-item' src={search} alt='search' />
          </div>

          <div className='video-wrapper mt-4 d-flex align-items-center justify-content-between'>
            <div className='card-wrapper d-flex align-items-center justify-content-between'>
              <Link to={`/video${video.id}`}>
                <img className='card-video' src={video} width={440} height={250}/>
              </Link>
              
              <div className='card-text-wrapper'>
                <h2 className='card-heading h4 fw-bold'>Choosing The Best Audio Player <br/> Software For Your Computer</h2>

                <p className='card-text'>
                  Your cheap internet-based banner advertising will become one of the <br/> sought for ads there are. Today, the world of Internet advertising is rapidly <br/> evolving beyond banner ads and intrusive pop-ups. Bayles A common <br/> medium for advertising on the Internet is the use of banner ads. 
                </p>
              </div>
            </div>
          </div>

          <div className='channels-wrapper mt-4'>
            <span className='rec-text h4 m-0'>
              Recommended channels
            </span>
            <ul className='channels-list list-unstyled mt-4'>
              <li className='channel-item d-flex align-items-center'>
                <img className='user-photo me-3' src={row1} alt='user-photo' width={50} height={50} />

                <span className='user-name fw-bold'>Flora Benson</span>
              </li>
              <li className='channel-item d-flex align-items-center mt-3'>
                <img className='user-photo me-3' src={row2} alt='user-photo' width={50} height={50} />

                <span className='user-name fw-bold'>Violet Cobb</span>
              </li>
              <li className='channel-item d-flex align-items-center mt-3'>
                <img className='user-photo me-3' src={row3} alt='user-photo' width={50} height={50} />

                <span className='user-name fw-bold'>Phillip Mullins</span>
              </li>
            </ul>
          </div>

          <div className='channels-wrapper mt-4'>
            <span className='rec-text h4 m-0'>
            Margaret Phelps videos
            </span>
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
          </div>
        </div>
      </div>
  )
}

export default Profile;