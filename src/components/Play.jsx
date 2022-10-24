import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/video.css';
import { Link, useParams } from 'react-router-dom';
import user from '../assets/images/videos/food.png';

const Play = () => {
  let [down, setDown] = useState(false);
  let [content, setContent] = useState([]);
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    setDown(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {setVideos(data)
      setDown(false)})
    }, [])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => res.json())
    .then((data) => {setContent(data)})
    }, [])

    let { id } = useParams();

    if (down) {
      return (
          <p className='text-center mt-5 h1 fw-bold '>Loading, be patient...</p>  
        )
      }

  return (
    <div className='container d-flex'>
      <div className='wrapper-cont d-inline-block mt-5'>
        {
          <div className='cont-item w-100 mb-3' key={content.id}>
            <Link className='direct-link text-decoration-none text-dark' to={`/video/${content.id}`}>
              <img className='card-img rounded-5' src={content.url} alt={content.title} width={700} height={500}/>

              <h3 className="item-title fs-2 fw-bold mt-2">{content.title}</h3>

              <div className='info-wrapper d-flex align-items-center'>
                <span className='info me-2'>{`${content.id}k views -`}</span>

                <span className='info'>{`${content.albumId} days ago`}</span>
              </div>
            </Link>
          </div>
        } 
        <div className='subscription mt-4 d-flex align-items-center'>
          <img className='user-img me-3' src={user} alt='user' width={80} height={80}/>

          <div className='subscription-info-wrapper'>
            <span className='subscription-info h3 fw-bold m-0'>Food & Drink</span>

            <span className='subscription-info d-block m-0'>Published on 14 Jun 2019</span>
          </div>

          <button className='subscription-btn btn btn-danger px-4 py-3 rounded-5' type='button'>Subscribe 2.3m</button>
        </div>

        <p className='subscription-info mt-4'>
          A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad <br/> copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula <br/> to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the <br/> consumers mood when they see your ad. 
        </p>
      </div>
      <div className='videos-wrapper mt-5 d-inline-block ms-5'>
        <h3 className='heading'>Next</h3>
        <ul className='fragment-list list-unstyled mt-3 d-flex flex-wrap'>
        {
          videos.slice(0, 3).map((fragment) => (
            <li className='fragment-item w-100 mb-3' key={fragment.id}>
              <Link className='direct-link text-decoration-none text-dark' to={`/video/${fragment.id}`}>
                <img className='card-img rounded-5' src={fragment.url} alt={fragment.title} width={400} height={250}/>

                <h3 className="item-title fs-6 fw-bold mt-2">{fragment.title}</h3>

                <div className='info-wrapper d-flex align-items-center'>
                  <span className='info me-2'>{`${fragment.id}k views -`}</span>

                  <span className='info'>{`${fragment.albumId} days ago`}</span>
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

export default Play
