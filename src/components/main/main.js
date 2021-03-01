import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';
import picture from '../../img/stock1.jpg';

const PhotosArray = [
  {id: "", src: "", alt: "", title: ""}
];

const menuIconTransition = () => {
  const menuIcon = document.querySelector('.main__menu-icon');
  const menuIconBars = menuIcon.children;

  menuIcon.addEventListener("mouseover", () => {
    menuIconBars[0].style.width = "40%";
    menuIconBars[1].style.width = "100%";
    menuIconBars[2].style.width = "55%";
  });

  menuIcon.addEventListener("mouseout", () => {
    menuIconBars[0].style.width = "100%";
    menuIconBars[1].style.width = "60%";
    menuIconBars[2].style.width = "25%";
  });
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = {
      isMenuOpened: false
    };
  }
  menuOpen() {
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".menu").style.display = "flex";
  }
  menuClose() {
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector(".menu").style.display = "none";
  }
  handleMenu() {
    if (this.state.isMenuOpened === true) {
      this.menuClose();
      this.setState({isMenuOpened: false});
      document.querySelector('.main__menu-icon').style.display = "flex";
    }
    else {
      this.menuOpen();
      this.setState({isMenuOpened: true});
      document.querySelector('.main__menu-icon').style.display = "flex";
    }
  }
  componentDidMount() {
    menuIconTransition();
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