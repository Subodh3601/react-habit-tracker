import './Home.css'
import React from 'react';
import homeImage from '../../public/homeImage.avif';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left-container'>
        <h1>Keep Your Day CALCULATED to Take most OUT OF IT</h1>
      </div>
      <div className='right-container'>
        <img className='home-image' src={homeImage} alt="Home"></img>
      </div>
      
    </div>
  );
}

export default Home;
