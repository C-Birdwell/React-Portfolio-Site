import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

const Head = props => {
  const { fancyBackground } = props
  return (
    <Helmet>
      <title>{fancyBackground} | Web By Birdwell</title>
    </Helmet>
  )
}

const mapStateToProps = state => ({
  fancyBackground: state.animations.fancyBackground,
})

export default connect(mapStateToProps)(Head)
