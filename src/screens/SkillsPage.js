import React from 'react'
import { connect } from 'react-redux'
import Jump from 'react-reveal/Jump'
import { employmentSkills } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileWord, faFilePdf } from '@fortawesome/free-solid-svg-icons'

class SkillsPage extends React.Component {
  renderLinkButton(link, icon) {
    return (
      <div className="col-1">
        <a href={link} target="_blank">
          <div className="link-button">
            <FontAwesomeIcon icon={icon} />
          </div>
        </a>
      </div>
    )
  }

  renderResumeLinks() {
    return (
      <div className="docs-wrapper">
        <h3>Resume</h3>
        <div className="row">
          {this.renderLinkButton(
            '/assets/documents/colin-birdwell-font-end-developer.pdf',
            faFilePdf,
          )}
          {this.renderLinkButton(
            '/assets/documents/colin-birdwell-font-end-developer.docx',
            faFileWord,
          )}
          {this.renderLinkButton(
            '/assets/documents/colin-birdwell-font-end-developer.txt',
            faFileAlt,
          )}
        </div>
      </div>
    )
  }

  renderJobSkills() {
    return (
      <div className="skill-wrapper">
        <h3>Skills</h3>
        <ul>
          {employmentSkills.map(skill => (
            <li key={skill}>
              <i className="icon-logo"></i>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const { windowMode } = this.props
    return (
      <div className="screen-content">
        <Jump cascade>
          <div>
            <h2>
              Skills <span>&</span> Documents
            </h2>
            {this.renderResumeLinks()}
            {this.renderJobSkills()}
          </div>
        </Jump>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  windowMode: state.layout.windowMode,
})

export default connect(mapStateToProps)(SkillsPage)
