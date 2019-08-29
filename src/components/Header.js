import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { _onUpdateFancyBackground } from '../actions'

import { faUser, faUserTie, faClipboardList } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  renderName() {
    return (
      <h1>
        <span>Web By</span>
        <span>Birdwell</span>
      </h1>
    )
  }

  renderLogo() {
    return (
      <div className="row">
        <div className="col-1 center">
          <ReactSVG src="/assets/images/logo.svg" className="logo-img" />
        </div>
        <div className="col-4">
          <NavLink to="/" activeClassName="active" exact={true}>
            {this.renderName()}
          </NavLink>
        </div>
      </div>
    )
  }

  renderLink(to, icon, exact = false) {
    const { _onUpdateFancyBackground } = this.props
    return (
      <div className="col-1">
        <NavLink
          to={to}
          activeClassName="active"
          exact={exact}
          onClick={() => _onUpdateFancyBackground(to)}
        >
          <FontAwesomeIcon icon={icon} className="nav-icon" />
        </NavLink>
      </div>
    )
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="col-1">{this.renderLogo()}</div>
          <div className="col-2">
            <div className="row">
              {this.renderLink('/', faUser, true)}
              {this.renderLink('/history', faUserTie)}
              {this.renderLink('/skills', faClipboardList)}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  fancyBackground: state.animations.fancyBackground,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _onUpdateFancyBackground }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
