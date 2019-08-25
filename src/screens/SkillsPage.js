import React from 'react'
import Fade from 'react-reveal/Fade'
import { employmentSkills } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFileWord, faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default class SkillsPage extends React.Component {
  renderLinkButton(link, text, icon) {
    return (
      <div className="col-1">
        <a href={link} target="_blank">
          <div className="link-button">
            <FontAwesomeIcon icon={icon} className="nav-icon" />
            <p>{text}</p>
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
          {this.renderLinkButton('https://www.resume.com/share/colin-resume', 'Online', faFile)}
          {this.renderLinkButton(
            '/assets/documents/colin-birdwell-font-end-developer.pdf',
            'PDF',
            faFilePdf,
          )}
          {this.renderLinkButton('https://www.resume.com/share/colin-resume', 'Word', faFileWord)}
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
    return (
      <Fade
        bottom
        //delay={750}
        duration={1250}
      >
        <div className="screen-content">
          <h2>
            Skills <span>&</span> Documents
          </h2>
          {this.renderResumeLinks()}
          {this.renderJobSkills()}
        </div>
      </Fade>
    )
  }
}
