import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';
import picture from '../../img/stock1.jpg';

let scrollY = 0;
const photosArray = [0,0,0,0,0,0,0];
  //{id: "", src: "", alt: "", title: ""}


const menuDisplayChanger = (isMenuOpened) => {
  const body = document.querySelector("body");
  const menuContainer = document.querySelector(".menu");

  if (isMenuOpened) {
    scrollY = document.documentElement.scrollTop;

    // BODY FREEZING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: fixed`;

    menuContainer.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      display: flex`;
  }
  else {

    // BODY POSITION CORRECTING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: static`;

    menuContainer.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      display: none`;

    window.scroll(0, scrollY);
  }
}

const menuIconTransformer = (isMenuOpened) => {
  const menuIcon = document.querySelector('.main__menu-icon');
  const menuIconBars = menuIcon.children;

  if (isMenuOpened) {
    menuIcon.style.cssText = `
      height: 37px
      top: 45%;`;

    menuIconBars[0].style.cssText = `
      width: 100%;
      top: 50%;
      transform: rotate(-45deg);
      background: #828282`;

    menuIconBars[1].style.cssText = `
      opacity: 0`;

    menuIconBars[2].style.cssText = `
      width: 100%;
      top: 50%;
      transform: rotate(45deg);
      background: #828282`;
  }
  else {
    menuIcon.style.cssText = `
      height: 23px
      top: 50%;`;

    menuIconBars[0].style.cssText = `
      width: 100%;
      top: 0;
      transform: rotate(0deg);
      background: #FFFFFF`;

    menuIconBars[1].style.cssText = `
      opacity: 1`;

    menuIconBars[2].style.cssText = `
      width: 25%;
      top: 20px;
      transform: rotate(0deg);
      background: #FFFFFF`;
  }
}

const menuIconTransition = (isMenuOpened) => {
  const menuIcon = document.querySelector('.main__menu-icon');
  const menuIconBars = menuIcon.children;

  const handleMouseOver = () => {
    menuIconBars[0].style.cssText =
    `width: 40%`;
    menuIconBars[1].style.cssText =
    `width: 100%`;
    menuIconBars[2].style.cssText =
    `width: 55%`;
  }
  const handleMouseOut = () => {
    menuIconBars[0].style.cssText =
    `width: 100%`;
    menuIconBars[1].style.cssText =
    `width: 60%`;
    menuIconBars[2].style.cssText =
    `width: 25%`;
  }

  if (isMenuOpened) {
    menuIcon.addEventListener("mouseover", handleMouseOver);
    menuIcon.addEventListener("mouseout", handleMouseOut);
  }
  else {
    menuIcon.removeEventListener("mouseover", handleMouseOver);
    menuIcon.removeEventListener("mouseout", handleMouseOut);
  }
}

const menuOpeningTransition = () => {
  const menuContainer = document.querySelector(".menu");

  menuContainer.style.cssText =
   `animation-name: openingAnimation;
    animation-duration: 1s
    animation-timing-function: ease`;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = {
      isMenuOpened: false
    };
  }
  
  menuOpen() {
    menuDisplayChanger(true);
    menuIconTransformer(true);
  }

  menuClose() {
    menuDisplayChanger(false);
    menuIconTransformer(false);
  }

  handleMenu() {
    this.setState({isMenuOpened: !this.state.isMenuOpened});
    if (this.state.isMenuOpened === true) {
      this.menuClose();
    }
    else {
      this.menuOpen();
    }
  }

  componentDidMount() {
    menuIconTransformer(false);
  }

  render() {
    return (
      <main className="main">

        <button className="main__menu-icon" onClick={this.handleMenu}>
          <span className="main__menu-icon__top-bar"></span>
          <span className="main__menu-icon__middle-bar"></span>
          <span className="main__menu-icon__bottom-bar"></span>
        </button>

        <section className="main__grid-container">
          <div className="main__grid-container__content">
            <Picture 
              id="0"
              width="100%" 
              height="50%" 
              top="0" 
              color="blue" 
              title="First blue picture"
              />
            <Picture 
              id="6" 
              width="100%" 
              height="50%" 
              bottom="0" 
              color="green" 
              title="Second green picture"
              />
          </div>
          <div className="main__grid-container__content">
            <Picture width="49%" height="100%" left="0" color="violet" />
            <Picture width="49%" height="100%" right="0" color="red" />
          </div>
          <div className="main__grid-container__content">
            <Picture width="50%" height="50%" top="0" color="yellow" />
            <Picture width="50%" height="50%" right="0" color="pink" />
            <Picture width="100%" height="25%" top="50%" color="aqua" />
          </div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>

          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
          <div className="main__grid-container__content"></div>
        </section>
      </main>
    );
  }
}
export default Main;
export {photosArray};