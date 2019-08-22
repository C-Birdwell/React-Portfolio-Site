import React from 'react'
import Fade from 'react-reveal/Fade'
import { employmentHistory } from '../data'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default class EmploymentPage extends React.Component {
  componentDidMount() {}

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
    return (
      <Fade bottom delay={100} duration={1500}>
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
