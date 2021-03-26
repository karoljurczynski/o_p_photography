// IMPORTS

import React from 'react';
import '../styles/components/header/header.css';


// COMPONENT

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isButtonSetAtPhotos: true };
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleModeChangeToPhotos = this.handleModeChangeToPhotos.bind(this);
    this.handleModeChangeToGraphics = this.handleModeChangeToGraphics.bind(this);
    this.setStateAs = this.setStateAs.bind(this);
  }

  setStateAs(newState) {
    this.setState({ isButtonSetAtPhotos: newState });
    this.props.changeMode(newState);
  }

  handleModeChange() {
    this.setStateAs(!this.state.isButtonSetAtPhotos);
  }

  handleModeChangeToPhotos() {
    this.setStateAs(true);
  }

  handleModeChangeToGraphics() {
    this.setStateAs(false);
  }

  render() {
    return (
      <>
      

      <header className="header" id="top">

        <section className="header__logo">
          <h1 className="header__logo__top">OLIWIER PAKUŁA</h1>
          <h2 className="header__logo__bottom">PHOTOGRAPHY</h2>
        </section>

        <div className="header__mode-changer">
          <p
            className="header__mode-changer__text"
            style={ !this.state.isButtonSetAtPhotos ? {color: "#828282"} : {color: "#FFFFFF"} }
            onClick={ this.handleModeChangeToPhotos }>
            PHOTOS
          </p>

          <button
            className="header__mode-changer__container" 
            onClick={ this.handleModeChange }>
            <span 
              className="header__mode-changer__container__button"
              style={ this.state.isButtonSetAtPhotos ? {left: "calc(0% - 3px)"} : {left: "calc(100% - 16px)"}} >
            </span>
          </button>

          <p 
            className="header__mode-changer__text"
            style={ this.state.isButtonSetAtPhotos ? {color: "#828282"} : {color: "#FFFFFF"} }
            onClick={ this.handleModeChangeToGraphics }>
            WORKS
          </p>
        </div>

      </header>
      </>
    );
  }
}


// EXPORTING COMPONENT

export default Header;