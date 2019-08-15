import React from 'react';
import Fade from 'react-reveal/Fade';

export default class EmploymentPage extends React.Component {
 
  render() {
    return (
      <Fade 
        bottom 
        //delay={750} 
        duration={1250}
      >
        <div className="screen-content">
          <h2>Employment History</h2>
          <p>Employment History
Payment Data Systems Inc / Usio
Front end developer
San Antonio, Texas
April 2018 – July 2019
Was main lead front end developer on rebuilding their proprietary finical debit card banking app white label template Akimbo onto a react-native platform.    App requirements included 
Used React-Native for all front end 
Heavy use of Axios for http requests
Animating visual components with haptic feedback
 Card to card transfers
 Bank to card transfers
Scheduling recurring  transfers (utilizing Moment.js to calculate future dates to pick from)
 Enrollment
 Image upload
Maintaining a list of transaction history
 Ordering new debit cards, enrollment
Using keychain to store secure login information & touch id biometrics
Utilizing environmental files for on boarding clients to utilize their branding for templating purposes  
 Displaying a live balance of each card
Also assisted and monitored digital art assets for maintaining consistent brand guidelines (consistent colors on sites, making sure fonts were consistent, using the same border radius on visual components, etc...). 
San Antonio Water System Via Sistema Technologies
Web Developer Consultant
January 2017 – February 2018
The main project worked was a customer portal that handled water bill account needs.
Coordinating responsive web development with project leads
Advised on UX/UI related matters
Integrated web technologies with legacy systems
Experiential Design
Freelance Web Development
Web Developer
January 2014 – Present
As a freelance web developer, I help smaller clients with a variety of web-related needs including:
Site development
Consulting, general website maintenance & troubleshooting, custom email templates
Social media
 Google Apps integration
 A variety of other website/web-related needs
DeFalco's Home Wine & Beer Supplies
Web Developer and Consultant
Houston, Texas
June 2016 – September 2016
With my experience as a developer:
I supervised the implementation of a new website for the client's e-commerce needs 
Consulted about the possibilities of greater web presence 
Implementing SEO to establish data feed back targeted at existing and new customer bases
Signet Interactive
Web Developer
September 2014 – June 2016
My primary role as a web developer at Signet Interactive, my duties included: 
Develop and create the functional websites
Followed proper web standards, as well as the user experience for both mobile and desktop in mind
Variety of web-related aspects, in regards to maintenance and support 
</p>
        </div>
      </Fade>
    );
  }
}