import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flip from 'react-reveal/Flip'

import { _onUpdateFancyBackground, _onChangeHeader } from '../actions'
import { faUser, faUserTie, faClipboardList } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  renderLink(to, icon, exact = false, delay) {
    const { _onUpdateFancyBackground } = this.props
    return (
      <div className="col-1">
        <Flip bottom delay={delay}>
          <NavLink
            to={to}
            activeClassName="active"
            exact={exact}
            onClick={() => {
              _onUpdateFancyBackground(to), window.scrollTo(0, 0)
            }}
          >
            <FontAwesomeIcon icon={icon} className="nav-icon" />
          </NavLink>
        </Flip>
      </div>
    )
  }

  render() {
    return (
      <div className="navigation">
        <nav className="row">
          {this.renderLink('/', faUser, true, 100)}
          {this.renderLink('/history', faUserTie, undefined, 200)}
          {this.renderLink('/skills', faClipboardList, undefined, 300)}
        </nav>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _onUpdateFancyBackground }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(Nav)
