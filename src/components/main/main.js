import React from 'react';
import '../../styles/components/main/main/main.css';

import Picture from './picture';
import PhotoReview from './photo_review';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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