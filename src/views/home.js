import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - InterBullet Art</title>
        <meta property="og:title" content="Home - InterBullet Art" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-container3">
            <img
              alt="image"
              src="/playground_assets/775863043-1400h.png"
              className="home-image"
            />
            <img
              alt="image"
              src="/playground_assets/z62c17e54d1efd-1400h.gif"
              className="home-image1"
            />
          </div>
          <div className="home-container4">
            <h1 className="home-text PicText">
              <span>Games</span>
            </h1>
          </div>
          <div className="home-container5">
            <div className="home-container6"></div>
            <div className="home-container7"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
