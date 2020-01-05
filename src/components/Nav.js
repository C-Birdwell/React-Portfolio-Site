import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { _onUpdateFancyBackground, _onChangeHeader } from '../actions'
import { faUser, faUserTie, faClipboardList } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  renderLink(to, icon, exact = false) {
    const { _onUpdateFancyBackground } = this.props
    return (
      <div className="col-1">
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
      </div>
    )
  }

  render() {
    return (
      <div className="navigation">
        <div className="row">
          {this.renderLink('/', faUser, true)}
          {this.renderLink('/history', faUserTie)}
          {this.renderLink('/skills', faClipboardList)}
        </div>
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
