import React from 'react'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { summary } from '../data'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, faPhoneAlt, faEnvelopeOpenText)

export default class DashboardPage extends React.Component {
  renderForward() {
    return (
      <div className="forward-content card">
        <h3>Front End Developer</h3>
        <p>A developer with five plus years experience specializing in UI/UX</p>
      </div>
    )
  }

  renderContactMethod(icon, text, linkFormat) {
    const linkDestination = 'https://github.com/C-Birdwell'

    return (
      <a href={linkDestination}>
        <div className="contact-wrapper">
          <FontAwesomeIcon icon={icon} />
          <p>{text}</p>
        </div>
      </a>
    )
  }

  renderContactSummary() {
    return (
      <div className="contact-content card">
        <h3>Contact</h3>
        {this.renderContactMethod(faPhoneAlt, '( 713 ) - 542 - 4597')}
        {this.renderContactMethod(faEnvelopeOpenText, 'Web.By.Birdwell@gmail.com')}
        {this.renderContactMethod(['fab', 'github'], 'https://github.com/C-Birdwell')}
      </div>
    )
  }

  renderSummaryContent() {
    return (
      <div className="summary-content card">
        <h3>Summary</h3>
        {summary.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
    )
  }

  render() {
    return (
      <Fade bottom duration={1250}>
        <div className="screen-content">
          <h2>Colin Birdwell</h2>
          {this.renderForward()}
          {this.renderSummaryContent()}
          {this.renderContactSummary()}
        </div>
      </Fade>
    )
  }
}
