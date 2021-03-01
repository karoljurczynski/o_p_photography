import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';

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
    this.state = {};
  }
  componentDidMount() {
    menuIconTransition();
  }

  render() {
    return (
      <main className="main">
        <a className="main__menu-icon" href="#">
          <span className="main__menu-icon__top-bar"></span>
          <span className="main__menu-icon__middle-bar"></span>
          <span className="main__menu-icon__bottom-bar"></span>
        </a>
        <section className="main__grid-column">

          pictures

        </section>

        <section className="main__grid-column">

          pictures

        </section>

        <section className="main__grid-column">

          pictures

        </section>
      </main>
    );
  }
}
export default Main;