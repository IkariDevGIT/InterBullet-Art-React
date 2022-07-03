import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './warning.css'

const Warning = (props) => {
  return (
    <div className="warning-container">
      <Helmet>
        <title>InterBullet Art</title>
        <meta property="og:title" content="InterBullet Art" />
      </Helmet>
      <div className="warning-container1">
        <h1 className="warning-text">
          <span>Warning!</span>
        </h1>
        <span className="warning-text02">
          <span>The following contains bright, flashing lights and/or</span>
          <br></br>
          <span>imagery that may cause discomfort and/or seizures for</span>
          <br></br>
          <span>those with photosensitive epilepsy.</span>
          <br></br>
          <span>Viewer discretion is advised.</span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            It could be that users with slow internet
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            might have difficulties
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>to use this website.</span>
          <br></br>
          <span></span>
          <br></br>
          <span>Info:</span>
          <br></br>
          <span>This old bad style is intentional</span>
        </span>
        <Link to="/home1" className="warning-navlink">
          <span>Continue</span>
        </Link>
      </div>
    </div>
  )
}

export default Warning
