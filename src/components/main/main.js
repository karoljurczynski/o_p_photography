import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';
import pic1 from '../../img/2.jpg';
import pic2 from '../../img/5.jpg';
import pic3 from '../../img/9.jpg';

let scrollY = 0;
const photosArray = [
  {src: {pic1}, alt: "First photo", title: "First photo", width: "100%", height: "100%"},
  {src: {pic2}, alt: "green", title: "Second green picture", width: "100%", height: "100%"},
  {src: {pic3}, alt: "red", title: "Third red picture", width: "100%", height: "100%"},
  {src: "orange", alt: "orange", title: "Fourth orange picture", width: "100%", height: "100%"},
  {src: "violet", alt: "violet", title: "Fifth violet picture", width: "100%", height: "100%"},
  {src: "pink", alt: "pink", title: "Sixth pink picture", width: "100%", height: "100%"},
  {src: "lime", alt: "lime", title: "Seventh lime picture", width: "100%", height: "100%"}
];
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

        <button className="main__menu-icon" onClick={this.handleMenu} href="#featured">
          <span className="main__menu-icon__top-bar"></span>
          <span className="main__menu-icon__middle-bar"></span>
          <span className="main__menu-icon__bottom-bar"></span>
        </button>

        <section className="main__grid">

          <div className="main__grid__item">
            <Picture data={0} />
          </div>
          
          <div className="main__grid__item">
            <Picture data={1} />
          </div>

          <div className="main__grid__item">
            <Picture data={2} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="featured">FEATURED</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <Picture data={0} />
          </div>

          <div className="main__grid__item">
            <Picture data={1} />
          </div>

          <div className="main__grid__item">
            <Picture data={2} />
          </div>

          <div className="main__grid__item">
            <Picture data={3} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="people">PEOPLE</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <Picture data={0} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="nature">NATURE</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={2} />
          </div>

          <div className="main__grid__item">
            <Picture data={3} />
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={2} />
          </div>

          <div className="main__grid__item">
            <Picture data={3} />
          </div>

          <div className="main__grid__item">
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <Picture data={0} />
          </div>

          <div className="main__grid__item">
          <h2 className="main__grid__item__title" id="ACTS">ACTS</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={1} />
          </div>

          <div className="main__grid__item">
            <Picture data={2} />
          </div>

          <div className="main__grid__item">
            <Picture data={3} />
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
export {photosArray};


/*const photosArray = [
  {src: "blue", alt: "blue", title: "First blue picture", width: "100%", height: "100%"},
  {src: "green", alt: "green", title: "Second green picture", width: "100%", height: "100%"},
  {src: "red", alt: "red", title: "Third red picture", width: "100%", height: "100%"},
  {src: "orange", alt: "orange", title: "Fourth orange picture", width: "100%", height: "100%"},
  {src: "violet", alt: "violet", title: "Fifth violet picture", width: "100%", height: "100%"},
  {src: "pink", alt: "pink", title: "Sixth pink picture", width: "100%", height: "100%"},
  {src: "lime", alt: "lime", title: "Seventh lime picture", width: "100%", height: "100%"}
];*/