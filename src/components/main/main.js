import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';
import picture from '../../img/stock1.jpg';

const PhotosArray = [
  {id: "", src: "", alt: "", title: ""}
];

const menuIconTransformingToX = () => {
  const menuIcon = document.querySelector('.main__menu-icon');
  const menuIconBars = menuIcon.children;

  menuIcon.style.cssText = 
   `height: 37px
    top: 45%;`;

  menuIconBars[0].style.cssText =
   `width: 100%;
    top: 50%;
    transform: rotate(-45deg);
    background: #828282`;

  menuIconBars[1].style.cssText =
   `opacity: 0`;

  menuIconBars[2].style.cssText =
   `width: 100%;
    top: 50%;
    transform: rotate(45deg);
    background: #828282`;
}

const menuIconTransformingToDefault = () => {
  const menuIcon = document.querySelector('.main__menu-icon');
  const menuIconBars = menuIcon.children;

  menuIcon.style.cssText = 
   `height: 23px
    top: 50%;`;

  menuIconBars[0].style.cssText =
   `width: 100%;
    top: 0;
    transform: rotate(0deg);
    background: #FFFFFF`;

  menuIconBars[1].style.cssText =
   `opacity: 1`;

  menuIconBars[2].style.cssText =
   `width: 25%;
    top: 20px;
    transform: rotate(0deg);
    background: #FFFFFF`;
}

const menuIconTransition = (disabled = false) => {
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

  menuIcon.addEventListener("mouseover", handleMouseOver);
  menuIcon.addEventListener("mouseout", handleMouseOut);

  if (disabled) {
    menuIcon.removeEventListener("mouseover", handleMouseOver);
    menuIcon.removeEventListener("mouseout", handleMouseOut);
  }
}

const menuOpeningTransition = () => {
  const container = document.querySelector(".menu");
  const menuList = document.querySelector(".menu__list");

  container.style.cssText =
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
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector(".menu").style.display = "flex";
    menuIconTransformingToX();
  }
  menuClose() {
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector(".menu").style.display = "none";
    menuIconTransformingToDefault();
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
    menuIconTransformingToDefault();
  }

  render() {
    return (
      <main className="main">
        <a className="main__menu-icon" href="#" onClick={this.handleMenu}>
          <span className="main__menu-icon__top-bar"></span>
          <span className="main__menu-icon__middle-bar"></span>
          <span className="main__menu-icon__bottom-bar"></span>
        </a>
        <section className="main__grid-column">
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />

        </section>

        <section className="main__grid-column">

          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />

        </section>

        <section className="main__grid-column">

          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />
          <Picture src={picture} alt="Picture" smallSrc="" largeSrc="" />

        </section>
      </main>
    );
  }
}
export default Main;