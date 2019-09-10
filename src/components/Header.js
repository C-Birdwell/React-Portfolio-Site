import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'
import { _onUpdateFancyBackground, _onChangeHeader, _onLayoutSize } from '../actions'
import Nav from '../components/Nav'

class Header extends React.Component {
  constructor(...props) {
    super(...props)
    this.resize = this.resize.bind(this)
  }

  componentDidMount() {
    const { _onLayoutSize } = this.props
    // Header transition effect
    this._scrollEffect()
    _onLayoutSize(window.innerWidth)

    window.addEventListener('resize', this.resize)
  }

  _scrollEffect() {
    const { _onChangeHeader } = this.props

    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        _onChangeHeader(true)
      } else {
        _onChangeHeader(false)
      }
    }
  }

  resize() {
    const { _onLayoutSize } = this.props
    _onLayoutSize(window.innerWidth)
  }

  renderName() {
    return (
      <h1>
        <span>Web By</span>
        <span>Birdwell</span>
      </h1>
    )
  }

  renderLogo() {
    const { _onUpdateFancyBackground } = this.props
    return (
      <NavLink
        to="/"
        activeClassName="active"
        exact={true}
        onClick={() => _onUpdateFancyBackground('/')}
      >
        <div className="row">
          <div className="col-1 center">
            <ReactSVG src="/assets/images/logo.svg" className="logo-img" />
          </div>
          <div className="col-4">{this.renderName()}</div>
        </div>
      </NavLink>
    )
  }

  renderPhantomColumn() {
    const { windowMode } = this.props
    if (windowMode === 'mobile') {
      return <div className="col-2"></div>
    } else {
      return null
    }
  }

  render() {
    const { hasScrolled, windowMode } = this.props
    const changeStyle = hasScrolled ? 'change' : 'init'
    const windowLayout = windowMode === 'desktop'
    const logoFix = windowLayout ? 'col-1' : 'col-3'

    return (
      <div className={`header-wrapper ${changeStyle}`}>
        <header>
          <div className="row">
            {this.renderPhantomColumn()}
            <div className={logoFix}>{this.renderLogo()}</div>
            {windowLayout && (
              <div className="col-2">
                <Nav />
              </div>
            )}
            {this.renderPhantomColumn()}
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasScrolled: state.animations.hasScrolled,
  windowMode: state.layout.windowMode,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _onUpdateFancyBackground, _onChangeHeader, _onLayoutSize }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
