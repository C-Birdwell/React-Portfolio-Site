import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { _onToggleNav } from '../actions'

class FooterNav extends React.Component {
  render() {
    return <Nav />
  }
}

const mapStateToProps = state => ({
  navToggle: state.layout.navToggle,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _onToggleNav }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterNav)
