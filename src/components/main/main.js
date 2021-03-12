// IMPORTS

import React from 'react';
import '../../styles/components/main/main/main.css';
import Menu from '../menu';
import Picture from './picture';


// GLOBALS

let scrollY = 0;


// COMPONENT

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
    this.linkToId = this.linkToId.bind(this);
  }

  bodyFreezer(isMenuOpened) {
    const body = document.querySelector("body");

    if (isMenuOpened) {
      scrollY = document.documentElement.scrollTop;
      
      // BODY FREEZING
      body.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        position: fixed`;
    }
    else {

      // BODY POSITION CORRECTING
      body.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        position: static`;
  
      window.scroll(0, scrollY);
    }
  }

  menuDisplayChanger(isMenuOpened) {
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
  
  menuIconTransformer(isMenuOpened) {
    const menuIcon = document.querySelector('.main__menu-icon');
    const menuIconBars = menuIcon.children;
  
    if (isMenuOpened) {
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
      menuIconBars[0].style.cssText = `
        width: 100%;
        transform: rotate(0deg);
        background: #FFFFFF`;
  
      menuIconBars[1].style.cssText = `
        opacity: 1`;
  
      menuIconBars[2].style.cssText = `
        width: 25%;
        transform: rotate(0deg);
        background: #FFFFFF`;
    }
  }
  
  menuIconTransition(isMenuOpened) {
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

  menuClose() {
    this.menuIconTransformer(false);
    this.menuDisplayChanger(false);
  }
  
  menuOpen() {
    this.menuIconTransformer(true);
    this.menuDisplayChanger(true);
  }

  handleMenu() {
    if (this.state.isMenuOpened === true) {
      document.querySelector(".menu").classList.add("menu--animate");
      document.querySelector(".menu").classList.remove("menu--animateOpening");
      document.querySelector(".menu").classList.add("menu--animateClosing");

      this.menuIconTransformer(false);
      
      setTimeout(() => { 
        this.menuDisplayChanger(false);
        this.setState({isMenuOpened: false});
      }, 500);
    }

    else {
      this.setState({isMenuOpened: true});

      document.querySelector(".menu").classList.remove("menu--animate");
      document.querySelector(".menu").classList.remove("menu--animateClosing");
      document.querySelector(".menu").classList.add("menu--animateOpening");

      this.menuIconTransformer(true);
      this.menuDisplayChanger(true);
    }
  }

  componentDidMount() {
    this.menuIconTransformer(false);
  }

  linkToId(e) {
    let container;

    if (e.target.innerText.toLowerCase() !== "featured")
      container = document.querySelector("#" + e.target.innerText.toLowerCase());
    else
      container = document.querySelector("#top");

    this.menuClose();
    this.setState({isMenuOpened: !this.state.isMenuOpened});

    container.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <main className="main">

        <Menu exit={this.handleMenu} linkTo={this.linkToId} />

        <button className="main__menu-icon" onClick={this.handleMenu} href="">
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
            <Picture data={7} />
          </div>

          <div className="main__grid__item">
            <Picture data={8} />
          </div>

          <div className="main__grid__item">
            <Picture data={9} />
          </div>

          <div className="main__grid__item">
            <Picture data={10} />
          </div>

          <div className="main__grid__item">
            <Picture data={0} />
          </div>

          <div className="main__grid__item">
            <Picture data={1} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="people">PEOPLE</h2>
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
            <Picture data={7} />
          </div>

          <div className="main__grid__item">
            <Picture data={8} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="nature">NATURE</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={9} />
          </div>

          <div className="main__grid__item">
            <Picture data={10} />
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
            <Picture data={4} />
          </div>

          <div className="main__grid__item">
            <Picture data={5} />
          </div>

          <div className="main__grid__item">
            <Picture data={6} />
          </div>

          <div className="main__grid__item">
            <h2 className="main__grid__item__title" id="acts">ACTS</h2>
          </div>

          <div className="main__grid__item">
            <Picture data={7} />
          </div>

          <div className="main__grid__item">
            <Picture data={8} />
          </div>

          <div className="main__grid__item">
            <Picture data={9} />
          </div>

        </section>
      
      </main>
    );
  }
}


// EXPORTING COMPONENT

export default Main;