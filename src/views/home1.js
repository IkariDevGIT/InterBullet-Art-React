import React from 'react'

import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - InterBullet Art</title>
        <meta property="og:title" content="Home1 - InterBullet Art" />
      </Helmet>
      <div className="home1-container1">
        <div className="home1-container2 article">
          <div className="home1-container3">
            <img
              alt="image"
              src="/playground_assets/775863043-1400h.png"
              className="home1-image"
            />
            <img
              alt="image"
              src="/playground_assets/z62c17e54d1efd-1400h.gif"
              className="home1-image1"
            />
          </div>
          <div className="home1-container4">
            <h1 className="home1-text PicText">
              <span>Games</span>
              <span></span>
            </h1>
            <h1 className="home1-text03 PicText">
              <span>Discord</span>
            </h1>
            <h1 className="home1-text05 PicText">
              <span>News</span>
              <span></span>
            </h1>
            <h1 className="home1-text08 PicText">Team Members</h1>
            <h1 className="home1-text09 PicText">
              <span>WTF?</span>
            </h1>
            <h1 className="home1-text11 PicText">
              <span>Info</span>
            </h1>
          </div>
          <div className="home1-container5">
            <div className="home1-container6"></div>
            <div className="home1-container7"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1
