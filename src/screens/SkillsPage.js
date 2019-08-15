import React from 'react'
import Fade from 'react-reveal/Fade'

export default class SkillsPage extends React.Component {
  render() {
    return (
      <Fade
        bottom
        //delay={750}
        duration={1250}
      >
        <div className="screen-content">
          <h2>Skills</h2>
          <p>
            Colin has worked with online and digital businesses both as a web & app developer, in
            the industries of private agencies, online commerce, local government, utilities, and
            the financial banking.
          </p>
        </div>
      </Fade>
    )
  }
}
