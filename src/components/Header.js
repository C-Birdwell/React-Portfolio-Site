import React from 'react';
import { NavLink } from 'react-router-dom';
import Anime from 'react-anime';
import ReactSVG from 'react-svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserTie, faSatelliteDish, faClipboardList } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

  renderName(){

    const animeProps = {
      opacity: [0, 1, 0.5],
      scale: [0.5, 1.25, 1],
      translateY: [-500, 0],
      duration: 1250,
      easing: 'linear',
    }

    return(
        <h1>
          <Anime {...animeProps} delay={100}>   
            <span>Web By</span>
          </Anime>
          <Anime {...animeProps}> 
            <span>Birdwell</span>
          </Anime>
        </h1>
    )
  }

  renderLogo(){ 
    return(
      <div className="row">
        <div className="col-1 center">
          <ReactSVG src="/assets/images/logo.svg" />
        </div>
        <div className="col-4">
          <NavLink to="/" activeClassName="active" exact={true}>
            {this.renderName()}
          </NavLink>
        </div>
      </div>
    )
  }


  render() {
    return (
      <header>
        <div className="row">
          <div className="col-1">
              {this.renderLogo()}
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-1">
                <NavLink to="/" activeClassName="active" exact={true}>
                    <FontAwesomeIcon icon={faSatelliteDish} className="nav-icon" />
                </NavLink>
              </div>
              <div className="col-1">
                <NavLink to="/summary" activeClassName="active">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                </NavLink>
              </div>
              <div className="col-1">
                <NavLink to="/history" activeClassName="active">
                  <FontAwesomeIcon icon={faUserTie} className="nav-icon" />
                </NavLink>
              </div>
              <div className="col-1">
                <NavLink to="/history" activeClassName="active">
                  <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};
