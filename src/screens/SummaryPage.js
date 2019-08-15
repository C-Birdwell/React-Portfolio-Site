import React from 'react'
import Fade from 'react-reveal/Fade'

export default class SummaryPage extends React.Component {
  render() {
    return (
      <Fade
        bottom
        //delay={750}
        duration={1250}
      >
        <div className="screen-content">
          <h2>Summary</h2>
          <p>
            Colin has worked with online and digital businesses both as a web & app developer, in
            the industries of private agencies, online commerce, local government, utilities, and
            the financial banking.
          </p>
          <p>
            As an App Developer, he built the front end of a personal banking debit card app while
            using a in house api to update the backend. Colin incorporated concepts of templated
            components, extensive visual animations, and haptic feedback.
          </p>
          <p>
            As a Web Developer, his skills include working knowledge of several various web based
            languages, User Experience & User Interface design (UX/UI), online interactions, web
            design, and working within small, innovative teams of developers in an Agile/Scrum
            setting.
          </p>
          <p>
            Colin also has extensive knowledge on IT operations, middleware experience, and some
            back-end experience with things like Node.js and SQL.
          </p>
        </div>
      </Fade>
    )
  }
}
