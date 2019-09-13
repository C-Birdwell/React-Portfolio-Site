import React from 'react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { employmentHistory } from '../data'
import ReactHtmlParser from 'react-html-parser'

class EmploymentPage extends React.Component {
  renderJobHistoryItem(company, role, date, text, i) {
    return (
      <div className="job-wrapper" key={i}>
        <h3>{company}</h3>
        <h4>{role}</h4>
        <p className="job-date">{date}</p>
        <div className="job-summary-wrapper">{ReactHtmlParser(text)}</div>
      </div>
    )
  }

  render() {
    const { windowMode } = this.props
    return (
      <Fade bottom={windowMode === 'desktop'} delay={100} duration={1500}>
        <div className="screen-content">
          <h2>Employment History</h2>
          {employmentHistory.map((val, i) =>
            this.renderJobHistoryItem(val.company, val.role, val.date, val.text, i),
          )}
        </div>
      </Fade>
    )
  }
}

const mapStateToProps = state => ({
  windowMode: state.layout.windowMode,
})

export default connect(mapStateToProps)(EmploymentPage)
