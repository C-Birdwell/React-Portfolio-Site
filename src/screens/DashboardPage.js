import React from 'react'
import Fade from 'react-reveal/Fade'

export default class DashboardPage extends React.Component {
  render() {
    return (
      <Fade
        bottom
        //delay={750}
        duration={1250}
      >
        <div className="screen-content">
          <h2>Contact</h2>
          <p>7135424597</p>
        </div>
      </Fade>
    )
  }
}
