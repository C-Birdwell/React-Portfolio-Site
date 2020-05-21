import React from 'react'
import { connect } from 'react-redux'
import Jump from 'react-reveal/Jump'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { summary } from '../data'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, faPhoneAlt, faEnvelopeOpenText)

class DashboardPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  renderForward() {
    return (
      <div className="forward-content card">
        <h3>Front End Developer</h3>
        <p>A developer with five plus years experience specializing in UI/UX</p>
      </div>
    )
  }

  renderContactMethod(icon, text, href, target = null) {
    return (
      <a href={href} target={target}>
        <div className="contact-wrapper">
          <FontAwesomeIcon icon={icon} />
          <p>{text}</p>
        </div>
      </a>
    )
  }

  renderContactSummary() {
    const { windowMode } = this.props
    return (
      <div className="contact-content card">
        <h3>Contact</h3>
        <div className={windowMode === 'mobile' ? 'row' : ''}>
          <div className={windowMode === 'mobile' ? 'col-1' : ''}>
            {this.renderContactMethod(faPhoneAlt, '( 713 ) - 542 - 4597', 'tel:1-713-542-4597')}
          </div>
          <div className={windowMode === 'mobile' ? 'col-1' : ''}>
            {this.renderContactMethod(
              faEnvelopeOpenText,
              'Web.By.Birdwell@gmail.com',
              'mailto:Web.By.Birdwell@gmail.com',
              '_top',
            )}
          </div>
          <div className={windowMode === 'mobile' ? 'col-1' : ''}>
            {this.renderContactMethod(
              ['fab', 'github'],
              'https://github.com/C-Birdwell',
              'https://github.com/C-Birdwell',
              '_blank',
            )}
          </div>
        </div>
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
    const { windowMode } = this.props
    return (
      <div className="screen-content">
        <Jump cascade>
          <div>
            <h2>Colin Birdwell</h2>
            {this.renderForward()}
            {this.renderSummaryContent()}
            {this.renderContactSummary()}
          </div>
        </Jump>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  windowMode: state.layout.windowMode,
})

export default connect(mapStateToProps)(DashboardPage)
