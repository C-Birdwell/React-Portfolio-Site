import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

const Footer = props => {
  const { windowMode } = props
  const renderNav = windowMode === 'mobile'
  return (
    <footer>
      {renderNav ? (
        <Nav />
      ) : (
        <div>
          <div className="footerBar left"></div>
          <div className="footerBar right"></div>
        </div>
      )}
    </footer>
  )
}

const mapStateToProps = state => ({
  windowMode: state.layout.windowMode,
})

export default connect(mapStateToProps)(Footer)
