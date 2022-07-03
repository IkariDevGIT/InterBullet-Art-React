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
        <div className="home1-container2">
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
          <div className="home1-container4"></div>
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
