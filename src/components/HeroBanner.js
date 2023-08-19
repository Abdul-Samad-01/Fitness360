import React from 'react';
import img from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className="herocontainer">
    <div className="box">
      <h2 className="title-color">Fitness 360</h2>
      <div className="innerbox">
        <h2 className="main-title">Workout. Conquer. Repeat</h2>
        <p className="description">Dive into a custom exercise experience, where every move propels you toward your fitness dreams</p>
        <a className="explore-button" href="#exercises">Explore Exercises</a>
      </div>
    </div>
    <img src={img} alt="banner" />
  </div>
);

export default HeroBanner;
