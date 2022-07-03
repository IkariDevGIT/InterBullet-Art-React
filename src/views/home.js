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
        <div className="home-container2 article">
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
          <div className="home-container4 article">
            <h1 className="home-text PicText">
              <span>Games</span>
              <span></span>
            </h1>
            <h1 className="home-text03 PicText">
              <span>Discord</span>
            </h1>
            <h1 className="home-text05 PicText">
              <span>News</span>
              <span></span>
            </h1>
            <h1 className="home-text08 PicText">Team Members</h1>
            <h1 className="home-text09 PicText">
              <span>WTF?</span>
            </h1>
            <h1 className="home-text11 PicText">
              <span>Info</span>
            </h1>
          </div>
          <div className="home-container5">
            <div className="home-container6 article"></div>
            <div className="home-container7 article"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
