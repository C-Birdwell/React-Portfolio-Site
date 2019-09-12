import React from 'react'
import Anime from 'react-anime'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { _onUpdateFancyBackground } from '../actions'

class AnimatedBackground extends React.Component {
  renderBox(i, delayXaxis) {
    const { gridNum } = this.props

    const duration1 = 100
    const duration2 = 500
    const duration3 = 1000
    const delayToScale = -delayXaxis * 0.1
    const scaleLowest = (delayToScale + 100) * 0.01
    const halfTheRow = i < gridNum * 0.5

    const arrayScale = [
      { value: 1, easing: 'easeInOutQuad', duration: duration1 },
      {
        value: scaleLowest,
        easing: 'easeInOutQuad',
        duration: duration2,
        delay: halfTheRow ? (gridNum - i) * 50 : i * 50,
      },
      { value: 1.1, easing: 'easeInOutQuad', duration: duration3 },
    ]

    const animeProps = {
      duration: duration3,
      scale: arrayScale,
      delay: delayXaxis,
    }

    return (
      <Anime {...animeProps} key={i}>
        <div className="box-item fancy-background"></div>
      </Anime>
    )
  }

  renderBoxRow(i, delayXaxis) {
    const { gridNum } = this.props

    const renderBoxRow = []
    for (let i = 1; i <= gridNum; i++) {
      renderBoxRow.push(this.renderBox(i, delayXaxis))
    }
    return (
      <div className="row" key={i}>
        {renderBoxRow.map(val => val)}
      </div>
    )
  }

  renderBoxGrid() {
    const { gridNum } = this.props

    const renderBoxGrid = []
    let delayXaxis = 0

    for (let i = 1; i <= gridNum; i++) {
      i < gridNum * 0.5 ? (delayXaxis = (gridNum - i) * 50) : (delayXaxis = i * 50)
      renderBoxGrid.push(this.renderBoxRow(i, delayXaxis))
    }

    if (renderBoxGrid.length === gridNum) {
      return <div className="box-container">{renderBoxGrid.map(val => val)}</div>
    } else {
      return null
    }
  }

  render() {
    const { fancyBackground, gridNum } = this.props
    return (
      <div className="background-holder" key={`${fancyBackground}-${gridNum}`}>
        {this.renderBoxGrid()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fancyBackground: state.animations.fancyBackground,
  gridNum: state.layout.gridNum,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _onUpdateFancyBackground }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnimatedBackground)
