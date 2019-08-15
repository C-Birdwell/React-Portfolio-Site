import React from 'react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

export class DashboardPage extends React.Component {
  render() {
    return (
      <Fade
        bottom
        //delay={750}
        duration={1250}
      >
        <div className="screen-content">
          <p>7135424597</p>
        </div>
      </Fade>
    )
  }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage)
