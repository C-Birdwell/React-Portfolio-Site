import React from 'react';
import Anime from 'react-anime';
import { easing } from 'popmotion';

const gridNum = 20;

export default class AnimatedBackground extends React.Component {



  renderBox(i, delayXaxis) {
    const duration1 = 100;
    const duration2 = 500;
    const duration3 = 1000;
    
    
    const arrayScale = [
      {value: 1, easing: 'easeInOutQuad', duration: duration1, },
      {value: .01, easing: 'easeInOutQuad', duration: duration2, delay: i < (gridNum * 0.5) ? ((gridNum - i) * 50) : (i * 50)},
      {value: 1, easing: 'easeInOutQuad', duration: duration3, },
    ]

    const animeProps = {
      duration: duration3,
      scale: arrayScale,
      delay: delayXaxis,
    }
    return (
      <Anime {...animeProps} key={i}>    
        <div className="box-item" />
      </Anime>

    );  
  }

  renderBoxRow(i, delayXaxis){
    const renderBoxRow = [];
    for (let i = 1; i <= gridNum; i ++) {
      renderBoxRow.push(this.renderBox(i, delayXaxis))
    }    
    // style={{flexDirection : i > 15 ? 'row-reverse' : 'row'}}
    return(
        <div className="row" key={i} >
        {renderBoxRow.map(val => val)}
      </div>
    )
  }

  renderBoxGrid(){
    const renderBoxGrid = []
    let delayXaxis = 0
    for (let i = 1; i <= gridNum; i ++) {
      i < (gridNum * 0.5) ? delayXaxis = ((gridNum - i) * 50) : delayXaxis = (i * 50)
      renderBoxGrid.push(this.renderBoxRow(i, delayXaxis))
    }
    

    if(renderBoxGrid.length === gridNum){
    return(
      <div className="box-container">
        {renderBoxGrid.map(val => val)}
    </div>)}else {
      return null
    }
  
  }

  render() {

    return (
      <div className="background-holder">
          {this.renderBoxGrid()}
      
      </div>
      
    );
  }
};


