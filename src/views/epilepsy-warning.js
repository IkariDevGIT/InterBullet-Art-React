import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './epilepsy-warning.css'

const EpilepsyWarning = (props) => {
  return (
    <div className="epilepsy-warning-container">
      <Helmet>
        <title>InterBullet Art</title>
        <meta property="og:title" content="InterBullet Art" />
      </Helmet>
      <div className="epilepsy-warning-container1">
        <h1 className="epilepsy-warning-text">
          <span>Warning!</span>
        </h1>
        <span className="epilepsy-warning-text2">
          <span>The following contains bright, flashing lights and/or</span>
          <br></br>
          <span>imagery that may cause discomfort and/or seizures for</span>
          <br></br>
          <span>those with photosensitive epilepsy.</span>
          <br></br>
          <span>Viewer discretion is advised.</span>
          <br></br>
        </span>
        <Link to="/home" className="epilepsy-warning-navlink">
          <span>Continue</span>
        </Link>
      </div>
    </div>
  )
}

export default EpilepsyWarning
