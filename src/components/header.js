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
    this.handleScrollToTop = this.handleScrollToTop.bind(this);
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
    this.handleScrollToTop();
  }

  handleScrollToTop() {
    window.scroll(0, 0);
}

  componentDidMount() {
    this.handleScrollToTop();
  }

  componentDidUpdate() {
    this.handleScrollToTop();
  }

  render() {
    return (
      <header className="header">

        <section className="header__logo" onClick={ this.handleScrollToTop }>

          <div className="header__logo__title">

            <div className="header__logo__title__name">
              <span className="header__logo__title__name__letter">O</span>
              <span className="header__logo__title__name__letter">L</span>
              <span className="header__logo__title__name__letter">I</span>
              <span className="header__logo__title__name__letter">W</span>
              <span className="header__logo__title__name__letter">I</span>
              <span className="header__logo__title__name__letter">E</span>
              <span className="header__logo__title__name__letter" style={{ marginRight: "5px" }}>R</span>
            </div>

            <div className="header__logo__title__name">
              <span className="header__logo__title__name__letter" style={{ marginLeft: "15px" }}>P</span>
              <span className="header__logo__title__name__letter">A</span>
              <span className="header__logo__title__name__letter">K</span>
              <span className="header__logo__title__name__letter">U</span>
              <span className="header__logo__title__name__letter">Ł</span>
              <span className="header__logo__title__name__letter">A</span>
            </div>

          </div>

          <div className="header__logo__title">

            { this.state.isButtonSetAtPhotos &&

            <div className="header__logo__title__brand">
              <span className="header__logo__title__brand__letter">P</span>
              <span className="header__logo__title__brand__letter">H</span>
              <span className="header__logo__title__brand__letter">O</span>
              <span className="header__logo__title__brand__letter">T</span>
              <span className="header__logo__title__brand__letter">O</span>
              <span className="header__logo__title__brand__letter">G</span>
              <span className="header__logo__title__brand__letter">R</span>
              <span className="header__logo__title__brand__letter">A</span>
              <span className="header__logo__title__brand__letter">P</span>
              <span className="header__logo__title__brand__letter">H</span>
              <span className="header__logo__title__brand__letter">Y</span>
            </div>

            }

            { !this.state.isButtonSetAtPhotos &&

            <div className="header__logo__title__brand">
              <span className="header__logo__title__brand__letter">A</span>
              <span className="header__logo__title__brand__letter">R</span>
              <span className="header__logo__title__brand__letter">T</span>
              <span className="header__logo__title__brand__letter" style={{ margin: "0 15px" }}>&</span>
              <span className="header__logo__title__brand__letter">D</span>
              <span className="header__logo__title__brand__letter">E</span>
              <span className="header__logo__title__brand__letter">S</span>
              <span className="header__logo__title__brand__letter">I</span>
              <span className="header__logo__title__brand__letter">G</span>
              <span className="header__logo__title__brand__letter">N</span>
            </div>

            }

          </div>

        </section>

        <div className="header__mode-changer">

          <button
            className="header__mode-changer__container" 
            onClick={ this.handleModeChange }>
            <span 
              className="header__mode-changer__container__button"
              style={ this.state.isButtonSetAtPhotos ? {left: "calc(0% - 3px)"} : {left: "calc(100% - 13px)"}} >
            </span>
          </button>

        </div>

      </header>
    );
  }
}


// EXPORTING COMPONENT

export default Header;